from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from .serializers import UserLoginSerializer
from .service import delete_one_token


class UserLoginAPIView(APIView):
    """Login for admin users"""

    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request: Request) -> Response:
        user_data = request.data

        serializer = self.serializer_class(data=user_data)
        serializer.is_valid(raise_exception=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserLogoutAPIView(APIView):
    """Logout for admin users"""

    permission_classes = (IsAuthenticated,)

    def post(self, request: Request) -> Response:
        token = request.auth

        delete_one_token(token=token)

        return Response(status=status.HTTP_200_OK)
