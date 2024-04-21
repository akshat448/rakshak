from django.urls import path
from . import views

urlpatterns = [
    # other url patterns...
    path('services.html', views.service, name='services'),
]