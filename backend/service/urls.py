from django.urls import path

from .views import AddServiceAPIView, DeleteServiceAPIView


urlpatterns = [
    # path('get-services/'),

    path('add-service/', AddServiceAPIView.as_view()),
    path('delete-service/', DeleteServiceAPIView.as_view()),
]
