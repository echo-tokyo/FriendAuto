from django.urls import path

from .views import (
    GetCategoriesAPIView, GetServicesAPIView, GetAllServicesByCategoriesAPIView,
    AddServiceAPIView, DeleteServiceAPIView
)


urlpatterns = [
    path('get-categories/', GetCategoriesAPIView.as_view(), name='get-categories'),
    path('get-services/', GetServicesAPIView.as_view(), name='get-services'),
    path('get-all-categorized-services/', GetAllServicesByCategoriesAPIView.as_view(), name='get-categorized-services'),

    path('add-service/', AddServiceAPIView.as_view(), name='add-service'),
    path('delete-service/', DeleteServiceAPIView.as_view(), name='delete-service'),
]
