document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.getElementById('addBookBtn');
    const addBookModal = document.getElementById('addBookModal');
    const closeBtn = document.querySelector('.close-btn');
    const cancelBtn = document.getElementById('cancelBtn');

    // Open the modal when the button is clicked
    addBookBtn.addEventListener('click', () => {
        addBookModal.style.display = 'flex';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        addBookModal.style.display = 'none';
    });

    // Close the modal when the cancel button is clicked
    cancelBtn.addEventListener('click', () => {
        addBookModal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === addBookModal) {
            addBookModal.style.display = 'none';
        }
    });

    // Handle the form submission (optional: add the new book to the book list)
    document.getElementById('addBookForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your form submission logic here

        // For example, adding a new book 
        const name = document.getElementById('name').value;
        const category = document.getElementById('category').value;
        const author = document.getElementById('author').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        
    });
});
