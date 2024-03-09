from django.urls import path

from .views import AddWorksheetAPIView, GetWorksheetsAPIView, MarkWorksheetViewedAPIView


urlpatterns = [
    path('get-worksheets/', GetWorksheetsAPIView.as_view()),

    path('add-worksheet/', AddWorksheetAPIView.as_view()),
    path('mark-viewed/', MarkWorksheetViewedAPIView.as_view()),
]
