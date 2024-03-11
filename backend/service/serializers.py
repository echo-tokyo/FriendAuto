from rest_framework import serializers

from core.errors.service_errors import CreateServiceError
from .models import Category, Service


class GetCategoriesSerializer(serializers.ModelSerializer):
    """Serialization of getting categories and count of services in each of them"""

    # кол-во услуг в категории
    count_services = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "name", "count_services")

    def get_count_services(self, instance: Category):
        """Получение кол-ва услуг в данной категории"""
        category_services = Service.objects.filter(category=instance.pk)
        return len(category_services)


class GetServicesSerializer(serializers.ModelSerializer):
    """Serialization of getting services of category and name of category"""

    class Meta:
        model = Service
        fields = ("id", "name", "price")


class GetServicesByCategoriesSerializer(serializers.ModelSerializer):
    """Serialization of getting services of category and name of category"""

    class Meta:
        model = Service
        fields = ("id", "name")


class AddServiceSerializer(serializers.ModelSerializer):
    """Serialization of new service adding"""

    class Meta:
        model = Service
        fields = "__all__"
        extra_kwargs = {
            'category': {'write_only': True},
        }

    def create(self, validated_data):
        try:
            new_service = Service.objects.create(**validated_data)
        except Exception:
            raise CreateServiceError('Invalid data was given! Cannot create new service.')

        return new_service
