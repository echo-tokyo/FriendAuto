from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from core.errors import CreateValidateError, DropValidateError
from .serializers import AddServiceSerializer
from .models import Category, Service


class AddServiceAPIView(APIView):
    """Add new service to definite category"""

    permission_classes = (IsAuthenticated,)
    serializer_class = AddServiceSerializer

    def post(self, request: Request):
        data = request.data

        try:
            # достаём id категории из JSON-запроса и получаем по нему объект
            category_id = data.get('category', None)
            Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            # если объект категории по id не найден, то возбуждаем ошибку
            raise CreateValidateError('Invalid category id was given! Cannot create new service.')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class DeleteServiceAPIView(APIView):
    """Delete service"""

    permission_classes = (IsAuthenticated,)

    def delete(self, request: Request):
        data = request.data

        try:
            # достаём id услуги из запроса и получаем объект услуги
            service_id = data.get('id', None)
            service_obj = Service.objects.get(pk=service_id)

            print(service_obj)

            # удаление услуги
            service_obj.delete()
        except Service.DoesNotExist:
            raise DropValidateError('Cannot delete service! Invalid service id was given.')

        return Response(status=status.HTTP_200_OK)
