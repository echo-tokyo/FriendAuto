from django.db import models


class Vacancy(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        unique=True
    )
    short_desc = models.TextField(
        null=True,
        blank=True
    )
