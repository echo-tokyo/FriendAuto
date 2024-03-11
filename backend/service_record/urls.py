from django.urls import path

from .views import AddServiceRecordAPIView, GetServiceRecordsAPIView, MarkServiceRecordViewedAPIView


urlpatterns = [
    path('get-service-records/', GetServiceRecordsAPIView.as_view(), name='get-service-records'),

    path('add-service-record/', AddServiceRecordAPIView.as_view(), name='add-service-record'),
    path('mark-viewed/', MarkServiceRecordViewedAPIView.as_view(), name='mark-viewed-service-record'),
]
