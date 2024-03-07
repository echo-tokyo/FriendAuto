from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from core.errors import DropVacancyError
from .models import Vacancy
from .serializers import AddVacancySerializer, GetVacanciesSerializer


class GetVacanciesAPIView(APIView):
    """Getting all vacancies"""

    permission_classes = (AllowAny,)
    serializer_class = GetVacanciesSerializer

    def get(self, request: Request) -> Response:
        # получение всех объектов вакансий и сериализация их данных
        all_vacancies = Vacancy.objects.all()

        serializer = self.serializer_class(instance=all_vacancies, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class AddVacancyAPIView(APIView):
    """Add new vacancy"""

    parser_classes = (MultiPartParser,)
    permission_classes = (IsAuthenticated,)
    serializer_class = AddVacancySerializer

    def post(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class DeleteVacancyAPIView(APIView):
    """Delete vacancy"""

    permission_classes = (IsAuthenticated,)
    serializer_class = AddVacancySerializer

    def delete(self, request: Request) -> Response:
        try:
            # достаём id вакансии из запроса и получаем объект вакансии
            vacancy_id = request.data.get('id', None)
            vacancy_obj = Vacancy.objects.get(pk=vacancy_id)

            # удаление вакансии
            vacancy_obj.delete()
        except Vacancy.DoesNotExist:
            raise DropVacancyError('Cannot delete vacancy! Invalid vacancy id was given.')

        return Response(status=status.HTTP_200_OK)
