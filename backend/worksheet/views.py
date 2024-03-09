from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from core.errors import VacancyValidateError, WorksheetValidateError
from vacancy.models import Vacancy
from .serializers import AddWorksheetSerializer, GetWorksheetsSerializer, MarkWorksheetViewedSerializer
from .models import Worksheet


class GetWorksheetsAPIView(APIView):
    """Get worksheets"""

    permission_classes = (IsAuthenticated,)
    serializer_class = GetWorksheetsSerializer

    def get(self, request: Request) -> Response:
        # получение всех непрочитанных анкет и сериализация их данных
        all_worksheets = Worksheet.objects.filter(viewed=False).order_by('sent_at')
        serializer = self.serializer_class(instance=all_worksheets, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class AddWorksheetAPIView(APIView):
    """Add new worksheet"""

    permission_classes = (AllowAny,)
    serializer_class = AddWorksheetSerializer

    def post(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id вакансии из JSON-запроса и получаем по нему объект
            vacancy_id = data.get('vacancy', None)
            Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist:
            # если объект вакансии по id не найден, то возбуждаем ошибку
            raise VacancyValidateError('Invalid vacancy id was given! Cannot create worksheet.')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_201_CREATED)


class MarkWorksheetViewedAPIView(APIView):
    """Mark worksheet viewed to don't remove it from DB"""

    permission_classes = (IsAuthenticated,)
    serializer_class = MarkWorksheetViewedSerializer

    def post(self, request: Request) -> Response:
        data = request.data

        try:
            # достаём id анкеты из JSON-запроса и получаем по нему объект
            worksheet_id = data.get('id', None)
            worksheet_obj = Worksheet.objects.get(id=worksheet_id)
        except Worksheet.DoesNotExist:
            # если объект анкеты по id не найден, то возбуждаем ошибку
            raise WorksheetValidateError('Invalid worksheet id was given! Cannot mark worksheet viewed.')

        serializer = self.serializer_class(data=data, instance=worksheet_obj)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_200_OK)
