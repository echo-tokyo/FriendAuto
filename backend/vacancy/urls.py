from django.urls import path

from .views import AddVacancyAPIView, DeleteVacancyAPIView, GetVacanciesAPIView


urlpatterns = [
    path('get-vacancies/', GetVacanciesAPIView.as_view()),

    path('add-vacancy/', AddVacancyAPIView.as_view()),
    path('delete-vacancy/', DeleteVacancyAPIView.as_view()),
]
