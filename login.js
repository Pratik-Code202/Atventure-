
user = sessionStorage.getItem("user");
pass = sessionStorage.getItem("pass");
if (user == null || pass == null){
    alert("Sorry, no users have been created (\"PROTOTYPE\")\nSending you to create a user")
    window.location.href = "register.html";
}

function clickk(event) {
    if (event.button == 0){
        username = document.getElementById('usernamelogin').value;
        password = document.getElementById('passwordlogin').value;
    }
    if (!(user == username && pass == password)){
        alert("Incorrect Passowrd or Username")
    } else {
        window.location.href = "game.html";
    }
}

console.log(user)
console.log(pass)