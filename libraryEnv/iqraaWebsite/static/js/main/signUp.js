
    function validation(event) {

        var username = document.getElementById('uname').value;
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('cpass').value;
        var email = document.getElementById('em').value;
        var isAdmin = document.getElementById('is_admin').checked;

        var isValid = true;

        // Clear all previous error messages
        document.getElementById('username').innerHTML = '';
        document.getElementById('password').innerHTML = '';
        document.getElementById('confirmpassword').innerHTML = '';
        document.getElementById('email').innerHTML = '';

        // Username validation
        if(username.length < 5) {
            document.getElementById('username').innerHTML = 'Username must be at least 5 characters long.';
            isValid = false;
        } else if (username.includes(' ')) {
            document.getElementById('username').innerHTML = 'Username cannot contain spaces.';
            isValid = false;
        }

        // Password validation
        if(password.length < 8) {
            document.getElementById('password').innerHTML = 'Password must be at least 8 characters long.';
            isValid = false;
        } else if (!/\d/.test(password)) {
            document.getElementById('password').innerHTML = 'Password must contain at least one digit.';
            isValid = false;
        } else if (!/[!#$%*@]/.test(password)) {
            document.getElementById('password').innerHTML = 'Please enter one of the following special characters: !, #, $, %, or *.';
            isValid = false;
        }

        // Confirm password validation
        if(password !== confirmPassword) {
            document.getElementById('confirmpassword').innerHTML = 'Passwords do not match. Please try again.';
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            document.forms[0].submit();
        } else {
            return false; // Return false if validation fails
        }
    }
