function saveBookDetails() {
    var bookname = document.getElementById('name').innerHTML;
    var bookauthor = document.getElementById('author').innerHTML;
    var bookid = document.getElementById('id').innerHTML;
    var bookcategory = document.getElementById('category').innerHTML;
    var bookdescription = document.getElementById('description').innerHTML;

    // Save bookinfo info to local storage
    localStorage.setItem('bookname', bookname);
    localStorage.setItem('bookauthor', bookauthor);
    localStorage.setItem('bookid', bookid);
    localStorage.setItem('bookcategory', bookcategory);
    localStorage.setItem('bookdescription', bookdescription);


}


function showBookDetails(){
    
    var bookName = localStorage.getItem('bookname');
    var bookAuthor = localStorage.getItem('bookauthor');
    var bookId = localStorage.getItem('bookid');
    var bookCategory = localStorage.getItem('bookcategory');
    var bookDescription = localStorage.getItem('bookdescription');


    var nameInput = document.getElementById('book_name');
    var authorInput = document.getElementById('author');
    var idInput = document.getElementById('book_id');
    var categoryInput = document.getElementById('category');
    var descriptionInput = document.getElementById('description');

    nameInput.value = bookName;
    authorInput.value = bookAuthor;
    idInput.value = bookId;
    categoryInput.value = bookCategory;
    descriptionInput.value = bookDescription;
}

function saveEditBookDetails(){

    var bookname = document.getElementById('book_name').value;
    var bookauthor = document.getElementById('author').value;
    var bookid = document.getElementById('book_id').value;
    var bookcategory = document.getElementById('category').value;
    var bookdescription = document.getElementById('description').value;

    if (/\D/.test(bookid)) {
        alert('Book ID should contain numbers only.');
        return false; // Stop form submission
    }


    // Save bookinfo info to local storage
    localStorage.setItem('bookname', bookname);
    localStorage.setItem('bookauthor', bookauthor);
    localStorage.setItem('bookid', bookid);
    localStorage.setItem('bookcategory', bookcategory);
    localStorage.setItem('bookdescription', bookdescription);

    alert('Book details saved successfully! go back to the choosen book and click save Book Edits');

}

function editBookDetails(){
    var bookName = localStorage.getItem('bookname');
    var bookAuthor = localStorage.getItem('bookauthor');
    var bookId = localStorage.getItem('bookid');
    var bookCategory = localStorage.getItem('bookcategory');
    var bookDescription = localStorage.getItem('bookdescription');

    // Save bookinfo info to local storage
    document.getElementById('name').innerHTML=bookName;
    document.getElementById('author').innerHTML=bookAuthor;
    document.getElementById('id').innerHTML=bookId;
    document.getElementById('category').innerHTML=bookCategory;
    document.getElementById('description').innerHTML=bookDescription;

}