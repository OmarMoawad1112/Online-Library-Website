from django.shortcuts import render
from .models import Book


def allBooks(request):
    if 'search' in request.GET:
        query = request.GET['search']
        inventorybooks = Book.objects.filter(name__icontains=query)
    else:
        inventorybooks = Book.objects.all() 
    
    return render(request , 'pages/Books.html' , {'allbooks' : inventorybooks})


