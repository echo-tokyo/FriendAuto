from django.db import models


class Category(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False
    )


class Service(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        null=False,
        blank=False
    )
    category = models.ForeignKey(
        to=Category,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        db_index=True
    )
    price = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
