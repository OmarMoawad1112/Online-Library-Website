// Get the button element with the ID 'myButton'
var borrowButton = document.getElementById('myButton');

// Add an event listener to the button for the 'click' event
borrowButton.addEventListener('click', showBorrow);

// Define the function to show 'borrowed'
function showBorrow() {
    // Get the current array of borrowed books from local storage
    var borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];

    // Get the book name from the 'name' element
    var bookname = document.getElementById('name').innerHTML;

    // Add the book name to the borrowed books array
    borrowedBooks.push(bookname);

    // Save the updated array back to local storage (server)
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

    // Inside this function, we're changing the inner HTML of the button
    // to 'Borrowed' when the button is clicked.
    borrowButton.innerHTML = 'Borrowed';
}
