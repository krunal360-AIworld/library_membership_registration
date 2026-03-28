// Form handle + data store
function handleForm(e){
e.preventDefault();

// Get values
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

// Generate ID
let id = "LIB" + Math.floor(Math.random()*10000);

// Store data
localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("id", id);

// Redirect
window.location.href = "success.html";
}


// Show data on success page
function showData(){

let name = localStorage.getItem("name");
let email = localStorage.getItem("email");
let id = localStorage.getItem("id");

if(name){
document.getElementById("result").innerHTML =
"Welcome " + name + "<br>" +
"Email: " + email + "<br>" +
"Membership ID: " + id;
}

}