from django.contrib import admin
from .models import Book

@admin.register(Book)
class AdminBooks(admin.ModelAdmin):
    list_display = ('id' , 'name' , 'author' , 'category' , 'price' , 'description' , 'image' , 'active')



