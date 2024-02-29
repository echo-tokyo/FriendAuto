from django.apps import apps
from django.contrib.auth.models import BaseUserManager


class ActionNotSupported(Exception):
    pass


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, password):
        """Create and save a user with the given username and password."""

        if not username:
            raise ValueError("The given username must be set")

        global_user_model = apps.get_model(
            self.model._meta.app_label, self.model._meta.object_name
        )
        username = global_user_model.normalize_username(username)
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password=None):
        raise ActionNotSupported('Ordinary user creation does not supported!')

    def create_superuser(self, username, password=None):
        return self._create_user(username, password)
