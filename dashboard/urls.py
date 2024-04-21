from django.urls import path
from .views import home_screen_view

urlpatterns = [
    path('', home_screen_view, name='home'),
    
]