from django.urls import path
from . import views




urlpatterns = [
    path('',views.index , name='index') ,
    path('books/' , views.books , name = 'books'),
    path('contact/',views.contact,name='contact'),
    path('about/',views.about,name='about'),
    path('signup/',views.signup , name = 'signup'),
    path('bookDetails/<int:book_id>/' , views.book_details , name='bookDetails'),
]