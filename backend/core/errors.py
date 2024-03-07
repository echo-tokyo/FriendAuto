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


class UserValidateError(APIException):
    """
    about: user
    Ошибка в получении доступа: неверные данные о пользователе, неверный токен
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'user_validate_error'


class UserAccessForbidden(APIException):
    """
    about: user
    Ошибка в получении прав на доступ: юзер не авторизован, деактивирован
    """

    status_code = status.HTTP_403_FORBIDDEN
    default_detail = _('Access forbidden')
    default_code = 'user_access_forbidden'


class ServerProcessError(APIException):
    """
    about: token
    Ошибка в обработке токена
    """

    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = _('Process error')
    default_code = 'server_process_error'


class CategoryValidateError(APIException):
    """
    about: category
    Ошибка при обработке категории
    """

    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = _('Validate error')
    default_code = 'category_validate_error'


class DropVacancyError(APIException):
    """
    about: vacancy
    Ошибка при удалении вакансии из БД
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Vacancy error')
    default_code = 'drop_vacancy_error'


class CreateVacancyError(APIException):
    """
    about: vacancy
    Ошибка при создании вакансии
    """

    status_code = status.HTTP_409_CONFLICT
    default_detail = _('Vacancy error')
    default_code = 'create_vacancy_error'
