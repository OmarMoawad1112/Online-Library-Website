from django import forms
from book.models import Book

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['name', 'author', 'category', 'description','price','image']