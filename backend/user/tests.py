from django.contrib.auth import get_user_model
from rest_framework.test import APIRequestFactory, APITestCase


class TestUser(APITestCase):
    def setUp(self):
        self.user = get_user_model().objects.all()

    def test_login(self) -> None:
        # user = get_user_model().objects.all()
        print(self.user)
        api_factory = APIRequestFactory()
