from django.urls import path

from .views import AddServiceRecordAPIView, GetServiceRecordsAPIView, MarkServiceRecordViewedAPIView


urlpatterns = [
    path('get-service-records/', GetServiceRecordsAPIView.as_view()),

    path('add-service-record/', AddServiceRecordAPIView.as_view()),
    path('mark-viewed/', MarkServiceRecordViewedAPIView.as_view()),
]
