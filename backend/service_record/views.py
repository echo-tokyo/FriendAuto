from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from core.errors import ServiceValidateError, ServiceRecordValidateError
from service.models import Service
from .serializers import AddServiceRecordSerializer, GetServiceRecordsSerializer, MarkServiceRecordViewedSerializer
from .models import ServiceRecord


class GetServiceRecordsAPIView(APIView):
    """Get services' records"""

    permission_classes = (IsAuthenticated,)
    serializer_class = GetServiceRecordsSerializer

    def get(self, request: Request) -> Response:
        # получение всех непрочитанных записей на услуги и сериализация их данных
        all_service_records = ServiceRecord.objects.filter(viewed=False).order_by('sent_at')
        serializer = self.serializer_class(instance=all_service_records, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class AddServiceRecordAPIView(APIView):
    """Add new service record"""

    permission_classes = (AllowAny,)
    serializer_class = AddServiceRecordSerializer

    def post(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id услуги из JSON-запроса и получаем по нему объект
            service_id = data.get('service', None)
            Service.objects.get(id=service_id)
        except Service.DoesNotExist:
            # если объект услуги по id не найден, то возбуждаем ошибку
            raise ServiceValidateError('Invalid service id was given! Cannot create service record.')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_201_CREATED)


class MarkServiceRecordViewedAPIView(APIView):
    """Mark service record viewed to don't remove it from DB"""

    permission_classes = (IsAuthenticated,)
    serializer_class = MarkServiceRecordViewedSerializer

    def post(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id записи на услугу из JSON-запроса и получаем по нему объект
            service_record_id = data.get('id', None)
            service_record_obj = ServiceRecord.objects.get(id=service_record_id)
        except ServiceRecord.DoesNotExist:
            # если объект записи на услугу по id не найден, то возбуждаем ошибку
            raise ServiceRecordValidateError('Invalid service record id was given! Cannot mark service record viewed.')

        serializer = self.serializer_class(data=data, instance=service_record_obj)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_200_OK)
