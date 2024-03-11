from django.urls import path

from .views import AddVacancyAPIView, DeleteVacancyAPIView, GetVacanciesAPIView


urlpatterns = [
    path('get-vacancies/', GetVacanciesAPIView.as_view(), name='get-vacancies'),

    path('add-vacancy/', AddVacancyAPIView.as_view(), name='add-vacancy'),
    path('delete-vacancy/', DeleteVacancyAPIView.as_view(), name='delete-vacancy'),
]
