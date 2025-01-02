

function checkCredentials(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    // Get saved user info from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    var storedRole = localStorage.getItem('isAdmin');

    if (username === storedUsername && password === storedPassword) {
        // Successful login
        if (storedRole === 'admin') {
            // Redirect to admin page
            window.location.href = "admin/html-files/adminPage.html";
        } else {
            // Redirect to user page
            window.location.href = "user/html-files/userPage.html";
        }
    } else {
        // Failed login
        alert('Invalid username or password');
    }
}


