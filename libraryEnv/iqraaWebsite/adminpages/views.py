from django.shortcuts import render , get_object_or_404, redirect
from book.models import Book
from userData.models import User
from .forms import BookForm
from django.contrib import messages
from django.contrib.auth import logout


def custom_logout_view(request):
    logout(request)
    return redirect('index')  # Redirect to the index view in the mainPages app


def adminHome(request):
    return render(request , 'pages/admin/adminPage.html')

def adminBooks(request):
    if 'search' in request.GET:
        query = request.GET['search']
        inventoryBooks = Book.objects.filter(name__icontains=query)
    else:
        inventoryBooks = Book.objects.all() 

    return render(request , 'pages/admin/bookList.html', {'allbooks':inventoryBooks})

def addBook(request): 
    if request.method == 'POST':
        name = request.POST.get("bookName")
        author = request.POST.get("bookAuthor")
        category = request.POST.get("category")
        price = request.POST.get("price")
        description = request.POST.get("description")
        image = request.FILES.get("bookImage")

        newBook = Book(
            name = name ,
            author = author ,
            category = category ,
            price = price ,
            description = description ,
            image = image 
        )
        newBook.save()
        return redirect("adminBooks")
    return render(request, 'pages/admin/addBook.html')



def adminProfile(request):
    user = request.session.get('username')
    if user is not None:
        ud = User.objects.get(pk=user)
        if request.method == 'POST':
            address = request.POST.get('Address')
            phone = request.POST.get('phone')
            if 'image' in request.FILES:
                image = request.FILES['image']
                ud.userImage = image
            if address:
                ud.address = address
            if phone:
                ud.phoneNumber = phone
            ud.save()
        return render(request , 'pages/admin/profile.html',{'data':ud})
    else:
        return redirect('index')

    


def adminChangePassword(request):
    user = request.session.get('username')
    if user:
        ud = User.objects.get(pk=user)
        if request.method == 'POST':
            oldpass = request.POST.get('oldpassword')
            newpass1 = request.POST.get('newpassword')
            ud.password = newpass1
            ud.save()
            return render(request, 'pages/admin/delay_redirect.html', {'redirect_url': 'adminProfile'})

    return render(request , 'pages/admin/changePassword.html',{'pass':ud.password})




def adminBookDetails(request , book_id):
    book = get_object_or_404(Book , id = book_id)
    return render(request , 'pages/admin/bookDetails.html' , {'book' : book})




def edit_book(request, book_id):
    book = Book.objects.get(id=book_id)
    if request.method == 'POST':
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return  render(request , 'pages/admin/bookDetails.html' , {'book' : book})  
    else:
        form = BookForm(instance=book)
    
    return render(request, 'pages/admin/editBook.html', {'form': form})



def delete_book(request):
    book_id = request.POST.get('book_id')
    try:
        book = Book.objects.get(id=book_id)
        book.delete()
        return redirect("adminBooks") 
    except Book.DoesNotExist:
        return render(request, 'pages/admin/deleteBook.html')

