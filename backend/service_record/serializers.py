from rest_framework import serializers

from core.errors.service_record_errors import CreateServiceRecordError
from .models import ServiceRecord


class GetServiceRecordsSerializer(serializers.ModelSerializer):
    """Serialization of getting services' records"""

    class Meta:
        model = ServiceRecord
        fields = ("id", "car_brand", "car_number", "client_phone")

    def to_representation(self, instance: ServiceRecord):
        representation = super().to_representation(instance)

        # добавление времени отправки записи на услугу к ответу
        representation['sent_at'] = instance.str_sent_at

        # добавление данных об услуге к ответу
        service = instance.service
        representation['service'] = {
            "name": service.name,
            "price": service.price,
            "category_name": service.category.name,
        }
        return representation


class AddServiceRecordSerializer(serializers.ModelSerializer):
    """Serialization of service record adding"""

    class Meta:
        model = ServiceRecord
        fields = ("service", "car_brand", "car_number", "client_phone")

    def create(self, validated_data):
        try:
            new_service_record = ServiceRecord.objects.create(**validated_data)
        except Exception:
            raise CreateServiceRecordError('Invalid data was given! Cannot create service record.')

        return new_service_record


class MarkServiceRecordViewedSerializer(serializers.ModelSerializer):
    """Serialization of marking service record viewed"""

    class Meta:
        model = ServiceRecord
        fields = ("id",)

    def update(self, instance: ServiceRecord, validated_data):
        instance.viewed = 1
        instance.save()

        return instance
