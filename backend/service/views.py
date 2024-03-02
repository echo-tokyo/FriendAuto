from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from core.errors import DropServiceError, CategoryValidateError
from .serializers import (GetCategoriesSerializer, GetServicesSerializer,
                          AddServiceSerializer)
from .models import Category, Service


class GetCategoriesAPIView(APIView):
    """Get categories and count of services in each of them"""

    permission_classes = (AllowAny,)
    serializer_class = GetCategoriesSerializer

    def get(self, request: Request) -> Response:
        # получение всех объектов категорий и сериализация их данных
        all_categories = Category.objects.all().order_by('pk')
        serializer = self.serializer_class(instance=all_categories, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class GetServicesAPIView(APIView):
    """Get services of category and name of category"""

    permission_classes = (AllowAny,)
    serializer_class = GetServicesSerializer

    def get(self, request: Request) -> Response:
        request_params = request.query_params

        try:
            category_id = request_params.get('id', None)
            category_obj = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            # если объект категории по id не найден, то возбуждаем ошибку
            raise CategoryValidateError('Invalid category id was given! Cannot get services of category.')

        # получение всех объектов услуг определённой категории
        all_services = Service.objects.filter(category=category_id)
        serializer = self.serializer_class(instance=all_services, many=True)

        response_data = {
            'category_name': category_obj.name,
            'services': serializer.data,
        }

        return Response(data=response_data, status=status.HTTP_200_OK)


class AddServiceAPIView(APIView):
    """Add new service to definite category"""

    permission_classes = (IsAuthenticated,)
    serializer_class = AddServiceSerializer

    def post(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id категории из JSON-запроса и получаем по нему объект
            category_id = data.get('category', None)
            Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            # если объект категории по id не найден, то возбуждаем ошибку
            raise CategoryValidateError('Invalid category id was given! Cannot create new service.')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class DeleteServiceAPIView(APIView):
    """Delete service"""

    permission_classes = (IsAuthenticated,)

    def delete(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id услуги из запроса и получаем объект услуги
            service_id = data.get('id', None)
            service_obj = Service.objects.get(pk=service_id)

            print(service_obj)

            # удаление услуги
            service_obj.delete()
        except Service.DoesNotExist:
            raise DropServiceError('Cannot delete service! Invalid service id was given.')

        return Response(status=status.HTTP_200_OK)
