from django.shortcuts import render , get_object_or_404,redirect
from book.models import Book
from userData.models import User
from django.contrib.auth import logout
from django.contrib import messages
from django.views.decorators.http import require_POST

def custom_logout_view(request):
    logout(request)
    return redirect('index')  # Redirect to the index view in the mainPages app


def userPage(request):
    return render(request , 'pages/user/userPage.html')

def userBooks(request):
    if 'search' in request.GET:
        query = request.GET['search']
        inventoryBooks = Book.objects.filter(name__icontains=query)
    else:
        inventoryBooks = Book.objects.all() 
        
    return render(request , 'pages/user/bookList.html' , {'books' : inventoryBooks})



def userAbout(request):
    return render(request , 'pages/user/about.html')



def userContact(request):
    return render(request , 'pages/user/contact.html')



def userProfile(request):
    user = request.session.get('username')
    if user is not None:
        ud = User.objects.get(pk=user)
        if request.method == 'POST':
            address = request.POST.get('Address')
            phone = request.POST.get('phone')
            if 'image' in request.FILES:
                image = request.FILES['image']
                ud.userImage = image
            if address is not None:
                ud.address = address
            if phone is not None:
                ud.phoneNumber = phone
            ud.save()
        return render(request , 'pages/user/profile.html',{'data':ud})
    else:
        return redirect('index')



def userChangePassword(request):
    user = request.session.get('username')
    if user:
        ud = User.objects.get(pk=user)
        if request.method == 'POST':
            oldpass = request.POST.get('oldpassword')
            newpass1 = request.POST.get('newpassword')
            ud.password = newpass1
            ud.save()
            return render(request, 'pages/admin/delay_redirect.html', {'redirect_url': 'userProfile'})

    return render(request , 'pages/user/changePassword.html',{'pass':ud.password})




def borrowedbooks(request):

    username = request.session.get('username')
    if username:
        user = get_object_or_404(User,pk = username)
        books = user.books.all()
        print("Books associated with user:", books)  
        return render(request , 'pages/user/borrowedBooks.html',{'books':books})
    else:
        return redirect('index')

def unborrow_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    
    # Get the username from the session
    username = request.session.get('username')
    
    # Fetch the User object using the username
    user = get_object_or_404(User, username=username)
    
    # Remove the book from the user's borrowed books
    user.books.remove(book)
    
    return redirect('borrowedBooks')  # Redirect to the borrowed books page or another appropriate page



    # Remove the book from the user's borrowed books
    user.books.remove(book)

    return redirect('borrowedBooks')  # redirect to the borrowed books page or another appropriate page

def userBookDetails(request , book_id):
    book = get_object_or_404(Book , id = book_id)
    return render(request , 'pages/user/bookDetails.html' , {'book' : book})

@require_POST
def borrow_book(request, book_id):
    if 'username' not in request.session:
        return redirect('index')

    book = get_object_or_404(Book, id=book_id)
    username = request.session.get('username')
    user = get_object_or_404(User, username=username)
    user.books.add(book)
    return redirect('borrowedBooks')