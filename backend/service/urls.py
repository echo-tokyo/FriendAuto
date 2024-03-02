from django.urls import path

from .views import (
    GetCategoriesAPIView, GetServicesAPIView,
    AddServiceAPIView, DeleteServiceAPIView
)


urlpatterns = [
    path('get-categories/', GetCategoriesAPIView.as_view()),
    path('get-services/', GetServicesAPIView.as_view()),

    path('add-service/', AddServiceAPIView.as_view()),
    path('delete-service/', DeleteServiceAPIView.as_view()),
]
