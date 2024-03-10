from django.utils.translation import gettext_lazy as _

from rest_framework import status
from rest_framework.exceptions import APIException


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


class VacancyValidateError(APIException):
    """
    about: vacancy
    Ошибка при обработке вакансии
    """

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Validate error')
    default_code = 'vacancy_validate_error'

