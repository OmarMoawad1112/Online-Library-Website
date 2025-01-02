// Function to display borrowed books 
function displayBorrowedBooks() { 
    // Get the borrowed books array from local storage 
    var borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || []; 
    
    // Get the container div by ID 
    var borrowedBooksContainer = document.getElementById( 
     "borrowedBooksContainer" 
    ); 
    
    // Clear any existing content in the container 
    borrowedBooksContainer.innerHTML = ""; 
    
    // Loop through the borrowed books array and create <div> elements for each book 
    // borrowedBooks.forEach(function (bookName) { 
    //  var newDiv = document.createElement("div"); 
    //  newDiv.textContent = bookName; 
    //  const a = document.createElement("button"); 
    //  a.textContent = "return"; 
    //  borrowedBooksContainer.appendChild(newDiv); 
    //  borrowedBooksContainer.appendChild(a); 
    // }); 
    
    borrowedBooks.forEach(function (bookName) { 
     // Create a new <div> element to display the book name 
     const newDiv = document.createElement("div"); 
     newDiv.className = "book-name"; 
     newDiv.textContent = bookName; 
    
     // Create a new <button> element for "return" 
     const returnButton = document.createElement("button"); 
     returnButton.textContent = "Return"; 
     returnButton.className = "return-button"; 
     // Add click event listener to the "return" button 
     returnButton.addEventListener("click", function () { 
      // Remove the book from borrowedBooks array 
      const index = borrowedBooks.indexOf(bookName); 
      if (index !== -1) { 
       borrowedBooks.splice(index, 1); // Remove the book from array 
       localStorage.setItem( 
        "borrowedBooks", 
        JSON.stringify(borrowedBooks) 
       ); // Update local storage 
    
       // Remove the book name and button from the display 
       newDiv.remove(); 
       returnButton.remove(); 
      } 
     }); 
    
     // Append the book name and "return" button to the container 
     borrowedBooksContainer.appendChild(newDiv); 
     borrowedBooksContainer.appendChild(returnButton); 
    }); 
   } 
    
   // Call the function to display borrowed books when the page loads 
   displayBorrowedBooks();