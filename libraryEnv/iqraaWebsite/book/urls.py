from django.urls import path
from . import views


urlpatterns = [
    path('' , views.allBooks , name = 'databaseBooks'),
]