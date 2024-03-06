from django.db import models
from django.conf import settings


class Vacancy(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        unique=True
    )
    photo = models.ImageField(
        upload_to='vacancy_photos/',
        default=settings.DEFAULT_VACANCY_PHOTO,
        null=True,
        blank=True
    )

# СДЕЛАТЬ МИГРАЦИИ
