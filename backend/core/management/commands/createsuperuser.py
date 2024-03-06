from django.conf import settings
from django.contrib.auth.management.commands import createsuperuser


class Command(createsuperuser.Command):
    def add_arguments(self, parser):
        # добавление дефолтных аргументов
        super().add_arguments(parser)
        # добавление аргумента для создания первого юзера без интерактивного ввода
        parser.add_argument(
            '--first-user',
            action='store_true',
            help='Create the first admin without using interactive data input'
        )

    def handle(self, *args, **options):
        first_user_flag = options.get('first_user', False)
        database = options["database"]

        if first_user_flag:
            # достаём из настроек заданное имя и пароль для первого юзера
            username = settings.MAIN_ADMIN_USERNAME
            password = settings.MAIN_ADMIN_PASSWORD

            try:
                # создание первого юзера
                self.UserModel._default_manager.db_manager(database).create_superuser(
                    username=username,
                    password=password
                )
                self.stdout.write(f'Superuser "{username}" with password "{password}" has been created successfully')
            except Exception:
                self.stdout.write(
                    f'Superuser "{username}" with password has not been created. May be first superuser already exist?'
                )
            return

        # если флага --first-user не было, то создаём юзера через интерактивный дефолтный режим
        self.stdout.write('Superuser creation is started')
        return super().handle(*args, **options)
