from rest_framework import serializers

from core.errors import CreateWorksheetError
from .models import Worksheet


class GetWorksheetsSerializer(serializers.ModelSerializer):
    """Serialization of getting worksheets"""

    class Meta:
        model = Worksheet
        fields = ("id", "client_name", "client_surname", "client_phone")

    def to_representation(self, instance: Worksheet):
        representation = super().to_representation(instance)

        # добавление времени отправки анкеты к ответу
        representation['sent_at'] = instance.str_sent_at

        # добавление данных о вакансии к ответу
        vacancy = instance.vacancy
        representation['vacancy'] = {
            "id": vacancy.id,
            "name": vacancy.title,
        }

        return representation


class AddWorksheetSerializer(serializers.ModelSerializer):
    """Serialization of worksheet adding"""

    class Meta:
        model = Worksheet
        fields = ("vacancy", "client_name", "client_surname", "client_phone")

    def create(self, validated_data):
        try:
            new_service_record = Worksheet.objects.create(**validated_data)
        except Exception:
            raise CreateWorksheetError('Invalid data was given! Cannot create worksheet.')

        return new_service_record


class MarkWorksheetViewedSerializer(serializers.ModelSerializer):
    """Serialization of marking worksheet viewed"""

    class Meta:
        model = Worksheet
        fields = ("id",)

    def update(self, instance: Worksheet, validated_data):
        instance.viewed = 1
        instance.save()

        return instance
