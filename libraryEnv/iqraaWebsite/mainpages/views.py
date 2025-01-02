from django.shortcuts import render , get_object_or_404 , redirect
from book.models import Book
from userData.models import User
from django.contrib import messages

def index(request):
    if request.method == 'POST':
        un = request.POST.get('uname')
        pas = request.POST.get('password')
        user = User.objects.filter(username=un, password=pas).first()
        if user is not None:
            request.session['username'] = user.pk
            if user.isAdmin:
                return redirect('adminHome')
            else:
                return redirect('userPage')
        else:
            messages.error(request, 'Invalid username or password')
    return render(request, 'pages/main/index.html')

def books(request):
    if 'search' in request.GET:
        query = request.GET['search']
        inventoryBooks = Book.objects.filter(name__icontains=query)
    else:
        inventoryBooks = Book.objects.all() 
    return render(request , 'pages/main/bookList.html' , {'allbooks' : inventoryBooks})

def contact(request):
    return render(request,'pages/main/contact.html')

def about(request):
    return render(request,'pages/main/about.html')

def signup(request):

    if request.method == 'POST':
        username = request.POST.get('uname')
        passowrd = request.POST.get('pass')
        email = request.POST.get('em')
        isAdmin = request.POST.get('is_admin') == '1'
        data = User(username = username,password=passowrd,email=email,isAdmin=isAdmin)
        data.save()
        return redirect('index')
        
    return render(request,'pages/main/signup.html')

def book_details(request , book_id):
    book = get_object_or_404(Book , id = book_id)
    return render(request ,'pages/main/bookDetails.html' , {'book' : book})


