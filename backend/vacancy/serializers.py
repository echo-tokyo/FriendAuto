from rest_framework import serializers

from core.errors import CreateVacancyError
from .models import Vacancy


class GetVacanciesSerializer(serializers.ModelSerializer):
    """Serialization of getting all vacancies"""
    photo_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Vacancy
        fields = ("id", "title", "photo", "photo_url")
        extra_kwargs = {
            'photo': {'write_only': True},
        }

    def get_photo_url(self, instance: Vacancy):
        """Get full url to vacancy photo"""

        return instance.photo_url


class AddVacancySerializer(serializers.ModelSerializer):
    """Serialization of adding new vacancy"""

    class Meta:
        model = Vacancy
        fields = ("id", "title", "photo")
        read_only = ("id",)
        extra_kwargs = {
            'photo': {'write_only': True},
        }

    def create(self, validated_data):
        # создание вакансии
        try:
            new_vacancy = Vacancy.objects.create(**validated_data)
        except Exception as error:
            raise CreateVacancyError('Invalid data was given! Cannot create new vacancy.')

        return new_vacancy

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # добавление ссылки на фото вакансии к ответу
        representation['photo_url'] = instance.photo_url
        return representation
