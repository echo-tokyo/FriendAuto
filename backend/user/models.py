from datetime import datetime

import jwt

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser
from django.db import models

from .managers import CustomUserManager


class User(AbstractBaseUser):
    last_login = None

    username = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False,
        db_index=True
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    @property
    def token(self):
        """Get token"""
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        """Generate JWT-token with user id, expire in JWT_EXPIRE time"""

        token_create_time = datetime.now()
        token_expire_time = token_create_time + settings.JWT_EXPIRE
        user_id = self.pk
        token = jwt.encode({
            'id': user_id,
            'exp': int(token_expire_time.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        new_token_obj = Token.objects.create(
            user_id=user_id,
            token=token,
        )

        try:
            new_token_obj.save()
            return token
        except Exception as error:
            raise error


class Token(models.Model):
    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        db_index=True
    )
    token = models.CharField(
        max_length=255,
        null=False,
        blank=False
    )
