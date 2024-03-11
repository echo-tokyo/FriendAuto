from django.urls import path

from .views import AddWorksheetAPIView, GetWorksheetsAPIView, MarkWorksheetViewedAPIView


urlpatterns = [
    path('get-worksheets/', GetWorksheetsAPIView.as_view(), name='get-worksheets'),

    path('add-worksheet/', AddWorksheetAPIView.as_view(), name='add-worksheet'),
    path('mark-viewed/', MarkWorksheetViewedAPIView.as_view(), name='mark-viewed-worksheet'),
]
