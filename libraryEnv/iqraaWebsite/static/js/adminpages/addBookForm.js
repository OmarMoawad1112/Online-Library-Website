// Attach an event listener to the form element with the ID 'bookForm'.
// This function will be executed when the form is submitted.
document.getElementById('bookForm').addEventListener('submit', function(event) {
    // Prevent the default form submission action, which typically refreshes the page.
    event.preventDefault();

    // Retrieve the value of the book name from the input field with the ID 'bookName'.
    const bookName = document.getElementById('bookName').value;
    // Retrieve the value of the book category from the input field with the ID 'category'.
    const bookCategory = document.getElementById('category').value;
    // Retrieve the value of the book author from the input field with the ID 'bookAuthor'.
    const bookAuthor = document.getElementById('bookAuthor').value;
    // Retrieve the value of the book description from the textarea with the ID 'description'.
    const bookDescription = document.getElementById('description').value;
    // Access the file input element to get the image file.
    const fileInput = document.getElementById('bookImage');


    if (/\D/.test(bookId)) {
        alert('Book ID should contain numbers only.');
        return false; // Stop form submission
    }

    // Retrieve the first (and expected only) file from the file input, assuming an image is selected.
    const file = fileInput.files[0];
    // Initialize a FileReader to read the image file.
    const reader = new FileReader();

    // Define what should happen when the FileReader successfully reads the file.
    reader.onload = function(e) {
        // Retrieve the result of the FileReader, which contains the Base64 encoded image data.
        const bookImage = e.target.result;

        // Create an object to store all the new book details.
        const BookDetails = {
            id: bookId,
            name: bookName,
            category: bookCategory,
            author: bookAuthor,
            description: bookDescription,
            image: bookImage
        };

        // Convert the array of books back into a JSON string.
        // Save the updated array back to Local Storage under the key 'bookDetails'.
        localStorage.setItem('bookDetails', JSON.stringify(BookDetails));

        // Notify the user that the book details were saved successfully.
        alert('Book is added successfully!');
        // Redirect the user to 'bookList.html' after successful storage.
    };

    // Instruct the FileReader to read the selected file as a Data URL.
    // This operation is asynchronous and will trigger the onload event upon completion.
    reader.readAsDataURL(file);
});
