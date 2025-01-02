

function validation() {
        
        var username = document.getElementById('uname').value;
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('cpass').value;
        var email = document.getElementById('em').value;
        var isAdmin = document.getElementById('is_admin').checked;

        if(username.length < 5) {
            document.getElementById('username').innerHTML = 'Username must be at least 5 characters long.' ;
            event.preventDefault(event) ;
        }
        else {
            document.getElementById('username').innerHTML = ''
        }

        if(username.includes(' ')) {
            document.getElementById('username').innerHTML = 'Username cannot contain spaces.' ;
            event.preventDefault(event) ;
        }
        else{
            document.getElementById('username').innerHTML = '' ;
        }

        if(password !== confirmPassword) {
            document.getElementById('confirmpassword').innerHTML = 'Passwords do not match. Please try again.' ;
            event.preventDefault(event) ;
        }
        else{
            document.getElementById('confirmpassword').innerHTML = '' ;

        }

        if( !/\d/.test(password) ) {
            document.getElementById('password').innerHTML = 'password must contain at least one digit ' ;
            event.preventDefault(event) ;
        }
        else{
            document.getElementById('password').innerHTML = '' ;
        }

        if( !/[!#$%*@]/.test(password)) {
            document.getElementById('password').innerHTML = 'please enter one of the following special characters: !, #, $, %, or *' ;
            event.preventDefault(event) ;
        }
        else{
            document.getElementById('password').innerHTML = '' ;
        }
        if(password.length < 8 ) {
            document.getElementById('password').innerHTML = 'Password must be at least 8 characters long' ;
            event.preventDefault(event) ;
        }
        else{
            document.getElementById('password').innerHTML = '' ;

        }
    }