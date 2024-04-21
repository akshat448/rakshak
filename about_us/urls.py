from django.urls import path
from . import views

urlpatterns = [
    # other url patterns...
    path('about.html', views.about, name='about'),
]