from rest_framework import serializers

from core.errors import CreateValidateError
from .models import Service


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
            raise CreateValidateError('Invalid data was given! Cannot create new service.')

        return new_service
