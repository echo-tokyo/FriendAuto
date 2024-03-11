from django.contrib.auth import authenticate
from rest_framework import serializers

from core.errors.user_errors import UserValidateError
from .models import User


class UserLoginSerializer(serializers.ModelSerializer):
    """Serialization of admin user login"""

    username = serializers.CharField(max_length=50, write_only=True)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = "__all__"

    def validate(self, data):
        """Checking the UserLoginSerializer for validity"""

        username = data.get('username', None)
        password = data.get('password', None)

        # Вызвать исключение, если не предоставлена почта.
        if username is None:
            raise UserValidateError('An username is required to log in.')
        # Вызвать исключение, если не предоставлен пароль.
        if password is None:
            raise UserValidateError('A password is required to log in.')

        # проверка, что предоставленные почта и пароль соответствуют какому-то юзеру в БД
        user = authenticate(username=username, password=password)

        # если пользователь с данными почтой/паролем не найден
        if user is None:
            raise UserValidateError('A user with this email and password was not found.')

        # возвращаем словарь проверенных данных
        return {
            'token': user.token,
        }
