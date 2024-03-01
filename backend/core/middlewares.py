from django.http import JsonResponse
from rest_framework import status
from rest_framework.request import Request

from user.models import Token
# from .errors import TokenNDoesNotExist


class CheckTokenMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request: Request):
        # Code to be executed for each request before the view (and later middleware) are called.

        check_token_status = self.check_token(request=request)

        if check_token_status:
            response = self.get_response(request)
            # Code to be executed for each request/response after the view is called.
            return response
        else:
            return JsonResponse(
                data={'errors': {'invalid_token': 'Invalid token. Token does not exist. Re-authorisation required'}},
                status=status.HTTP_401_UNAUTHORIZED
            )

    def check_token(self, request: Request):
        """Validate token"""

        # достаём заголовок с токеном
        try:
            auth_header = request.headers['Authorization']
        except KeyError:
            # если нет заголовка Authorization, то пропускаем все действия ниже
            return True

        header_token = auth_header.split(' ')[-1]
        # print([header_token])

        table_token = Token.objects.filter(token=header_token)
        # если токен не был найден в БД
        if not table_token:
            return False

        return True
