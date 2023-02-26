const show = document.querySelector("#show");
const password = document.querySelector("#password");


show.onmouseover = showPassword;
show.onmouseout = hidePassword;

function showPassword() {
    password.type = "text";
}
function hidePassword() {
    password.type = "password";
    
}