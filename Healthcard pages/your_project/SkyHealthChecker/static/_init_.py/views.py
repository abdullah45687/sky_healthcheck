from django.urls import path
from . import views

urlpatterns = [
    path('healthcard/', views.healthcard_view, name='healthcard'),
]
