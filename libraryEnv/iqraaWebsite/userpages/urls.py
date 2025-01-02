from django.urls import path
from . import views


urlpatterns = [
    path('' , views.userPage , name = 'userPage'),
    path('bookList/' , views.userBooks , name = 'userBooks'),
    path('borrowedBooks/' , views.borrowedbooks , name = 'borrowedBooks'),
    path('changePassword/' , views.userChangePassword , name = 'userChangePassword'),
    path('about', views.userAbout , name = 'userAbout') ,
    path('profile/' , views.userProfile , name = 'userProfile'),
    path('contact' , views.userContact , name = 'userContact'),
    path('bookDetails/<int:book_id>/' , views.userBookDetails , name = 'userBookDetails'),
    path('borrow/<int:book_id>/', views.borrow_book, name='borrow_book'),
    path('unborrow/<int:book_id>/', views.unborrow_book, name='unborrow_book'),
    path('logout/', views.custom_logout_view, name='logout'),
]