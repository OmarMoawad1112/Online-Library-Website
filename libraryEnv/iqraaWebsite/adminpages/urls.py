from django.urls import path
from . import views

urlpatterns = [
    path('',views.adminHome , name = 'adminHome'),
    path('adminbooks/',views.adminBooks , name = 'adminBooks') ,
    path('adminprofile/',views.adminProfile , name = 'adminProfile') ,
    path('deletebook/' , views.delete_book, name = 'deleteBookPage'),
    path('changepassword/' , views.adminChangePassword , name = 'adminChangePassword') ,
    path('bookDetils/<int:book_id>/' , views.adminBookDetails , name = 'adminBookDetails'),
    path('addBook/' , views.addBook , name = 'addBook') ,
    path('editBook/<int:book_id>/', views.edit_book, name='editBookPage') ,
        path('logout/', views.custom_logout_view, name='adminLogout'),

    

]
