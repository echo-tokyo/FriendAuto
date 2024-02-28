"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include


urlpatterns = [
    # юзер
    path('api/user', include('user.urls')),
    # управление услугами
    path('api/service', include('service.urls')),
    # управление вакансиями
    path('api/vacancy', include('vacancy.urls')),
    # управление записями на услуги
    path('api/service_record', include('service_record.urls')),
    # управление анкетами на вакансии
    path('api/worksheet', include('worksheet.urls')),
]
