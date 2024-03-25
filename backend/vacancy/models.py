from os import remove as remove_file

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

    @property
    def photo_url(self):
        if self.photo and hasattr(self.photo, 'url'):
            return f'{settings.IP_OR_DNS_SERVER}{self.photo.url}'

    def delete(self, *args, **kwargs):
        photo = self.photo

        if photo != 'vacancy_photos/default_worker.png':
            full_file_path = f'{settings.BASE_DIR}/media/{photo}'
            try:
                remove_file(full_file_path)
            except FileNotFoundError:
                print('ERROR')

        super(Vacancy, self).delete(*args, **kwargs)
