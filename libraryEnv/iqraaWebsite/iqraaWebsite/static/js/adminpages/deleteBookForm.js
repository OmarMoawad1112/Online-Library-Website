// Attach an event listener to the form with ID 'deleteForm'
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    // Prevent the default form submission to stop the page from reloading
    event.preventDefault();

    // Retrieve the value of the input field with ID 'bookIdInput', which is expected to contain the ID of the book to delete
    const bookId = document.getElementById('bookIdInput').value;

    // Save the book ID to localStorage under the key 'removedBookId'
    localStorage.setItem('removedBookId', bookId);

    window.alert('book id is saved go to Book List and click delete-book') ;

    // Optionally, you might want to add code here to actually delete the book from where it's stored or manage the deletion array
});









