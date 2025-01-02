function redirectPage(){
    event.preventDefault();
    var userName = document.getElementById('Username').value ;
    var password = document.getElementById('Password').value ;
    if(userName == 'user' && password == 'user'){
        window.location.href = "../html-files/bookList.html" ;
    }
}

