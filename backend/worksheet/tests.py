from random import choice as random_choice

from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, force_authenticate, APIClient

from .models import Worksheet
from vacancy.models import Vacancy


class TestWorksheets(APITestCase):
    @classmethod
    def setUpClass(cls):
        """Создание необходимых объектов в БД"""

        # создание двух тестовых вакансий
        vacancies_id = [
            Vacancy.objects.create(
                title=f'Vacancy{i}',
                photo=SimpleUploadedFile(
                    f"default_worker_{i}.png",
                    b"file_content",
                    content_type="image/png"
                )
            )
            for i in range(1, 3)
        ]

    @classmethod
    def tearDownClass(cls):
        """Удаление двух тестовых вакансий"""

        vacancy1, vacancy2 = Vacancy.objects.all()
        vacancy1.delete()
        vacancy2.delete()

    def test_created_vacancy_objects(self):
        """Проверка наличия созданных вакансий"""

        all_vacancies_id = Vacancy.objects.all()
        self.assertEqual(len(all_vacancies_id), 2)
        self.assertEqual(all_vacancies_id[0].title, 'Vacancy1')
        self.assertEqual(all_vacancies_id[1].title, 'Vacancy2')

    def test_add_worksheet_to_first_vacancy(self):
        """Добавление тестовой анкеты"""

        vacancy1, _ = Vacancy.objects.all()
        data = {
            "vacancy": vacancy1.pk,
            "client_name": 'Client1',
            "client_surname": 'Gosling1',
            "client_phone": "1" * 11,
        }
        response = self.client.post(reverse('add-worksheet'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Worksheet.objects.count(), 1)
        self.assertEqual(Worksheet.objects.get().client_name, 'Client1')
        self.assertEqual(Worksheet.objects.get().vacancy, vacancy1)

    def test_get_worksheets(self):
        """Получение всех анкет запросом"""

        all_vacancies = Vacancy.objects.all()

        for i in range(1, 6):
            Worksheet.objects.create(
                vacancy=random_choice(all_vacancies),
                client_name=f'Client{i}',
                client_surname=f'Gosling{i}',
                client_phone=str(i) * 11,
            )

        client = APIClient()
        client.force_authenticate()
        response = client.get(reverse('get-worksheets'))
        self.assertEqual(response.status_code, status.HTTP_200_OK, 'Сейчас здесь нужно аутентифицироваться')
