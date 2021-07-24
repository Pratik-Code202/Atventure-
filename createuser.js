var user;
var pass;
function clickk(event) {
    if (event.button == 0){
        username = document.getElementById('username').value;
        newpassword = document.getElementById('newpassword').value;
        confirmpassword = document.getElementById('confirmpassword').value;
        if (!(newpassword == confirmpassword)){
            alert("passwords do not match")
            document.getElementById('newpassword').value = ""
            document.getElementById('confirmpassword').value = ""
        } else {
            sessionStorage.setItem("user", username);
            sessionStorage.setItem("pass", newpassword);
            window.location.href = "login.html";
        }
    }
}