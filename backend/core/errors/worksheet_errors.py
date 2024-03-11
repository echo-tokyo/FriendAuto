from django.utils.translation import gettext_lazy as _

from rest_framework import status
from rest_framework.exceptions import APIException


class CreateWorksheetError(APIException):
    """
    about: worksheet
    Ошибка при создании анкеты
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Worksheet error')
    default_code = 'create_worksheet_error'


class WorksheetValidateError(APIException):
    """
    about: worksheet
    Ошибка при обработке анкеты
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'worksheet_validate_error'
