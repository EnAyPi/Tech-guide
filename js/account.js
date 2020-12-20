function login() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("logout-screen").style.display = "block"

    } else {
        document.getElementById("login-screen").style.display = "block";
    }

}

window.onclick = function (event) {
    if (event.target == document.getElementById("login-screen")) {
        document.getElementById("login-screen").style.display = "none";
    } else if (event.target == document.getElementById("logout-screen")) {
        document.getElementById("logout-screen").style.display = "none";
    }
}

function logout() {
    document.getElementById("login-name").innerHTML = "Đăng nhập";
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    document.getElementById("logout-screen").style.display = "none";
    location.reload();
}
function getLoginInfo() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value + "@gmail.com";
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    document.getElementById("login-name").innerHTML = username;
    document.getElementById("login-name-2").innerHTML = username;
    document.getElementById("username-logout").innerHTML = username;
    document.getElementById("email-logout").innerHTML = email;
    document.getElementById("login-screen").style.display = "none";
}

function onloadLogin() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("login-name").innerHTML = localStorage.getItem("username");
        document.getElementById("login-name-2").innerHTML = localStorage.getItem("username");
        document.getElementById("username-logout").innerHTML = localStorage.getItem("username");
        document.getElementById("email-logout").innerHTML = localStorage.getItem("email");
    }
}

document.getElementById("login-form").addEventListener("submit", getLoginInfo);
