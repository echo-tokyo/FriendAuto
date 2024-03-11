from django.utils.translation import gettext_lazy as _

from rest_framework import status
from rest_framework.exceptions import APIException


class DropServiceError(APIException):
    """
    about: service
    Ошибка при удалении услуги из БД
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Service error')
    default_code = 'drop_service_error'


class CreateServiceError(APIException):
    """
    about: service
    Ошибка при создании услуги
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Service error')
    default_code = 'create_service_error'


class ServiceValidateError(APIException):
    """
    about: service
    Ошибка при обработке услуги
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'service_validate_error'


class CategoryValidateError(APIException):
    """
    about: category
    Ошибка при обработке категории
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'category_validate_error'
