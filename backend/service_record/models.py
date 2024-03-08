from django.db import models

from service.models import Service


class ServiceRecord(models.Model):
    service = models.ForeignKey(
        to=Service,
        on_delete=models.CASCADE,
        null=False,
        blank=False
    )
    car_brand = models.CharField(
        max_length=100,
        null=False,
        blank=False
    )
    car_number = models.CharField(
        max_length=10,
        null=False,
        blank=False
    )
    client_phone = models.CharField(
        max_length=11,
        null=False,
        blank=False
    )
    viewed = models.BooleanField(
        default=0
    )
    sent_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False
    )

    @property
    def str_sent_at(self):
        return str(self.sent_at)[:16].replace('T', ' ')
