from django.utils.translation import gettext_lazy as _

from rest_framework import status
from rest_framework.exceptions import APIException


class CreateServiceRecordError(APIException):
    """
    about: serviceRecord
    Ошибка при создании записи на услугу
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Service record error')
    default_code = 'create_service_record_error'


class ServiceRecordValidateError(APIException):
    """
    about: serviceRecord
    Ошибка при обработке записи на услугу
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'service_record_validate_error'

