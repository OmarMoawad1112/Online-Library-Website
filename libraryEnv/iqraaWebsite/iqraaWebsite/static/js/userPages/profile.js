const username = localStorage.getItem("username"); 
const email = localStorage.getItem("email"); 
 
const usernameCell = document.getElementById("username"); 
const emailCell = document.getElementById("email"); 
 
usernameCell.value = username; 
emailCell.value = email;