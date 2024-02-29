from django.utils.translation import gettext_lazy as _

from rest_framework import status
from rest_framework.exceptions import APIException


class CreateValidateError(APIException):
    """Ошибка валидации данных при его создании"""

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Validate error')
    default_code = 'create_validate_error'


class DropValidateError(APIException):
    """Ошибка валидации данных при его удалении"""

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Validate error')
    default_code = 'drop_validate_error'

