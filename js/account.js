function login() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("logout-screen").style.display = "block";
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
    document.getElementById("logout-submit").style.display = "none";
    document.getElementById("loading-icon-logout").style.display = "block";
    setTimeout(() => {
        document.getElementById("logout-submit").style.display = "block";
        document.getElementById("loading-icon-logout").style.display = "none";
        document.getElementById("login-name").innerHTML = "Đăng nhập";
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        document.getElementById("logout-screen").style.display = "none";
        location.reload();
    }, 500);

}
function getLoginInfo(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;


    if (username.length < 8 || username.length > 20) {
        document.getElementById("error-username").style.color = "red";
    }
    else if (email.indexOf(".") < 0 || email.indexOf("@") < 0) {
        document.getElementById("error-email").style.color = "red";
    } else {
        document.getElementById("login-submit").style.display = "none";
        document.getElementById("loading-icon-login").style.display = "block";
        setTimeout(() => {
            document.getElementById("login-submit").style.display = "block";
            document.getElementById("loading-icon-login").style.display = "none";
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            document.getElementById("login-name").innerHTML = username;
            document.getElementById("login-name-2").innerHTML = username;
            document.getElementById("username-logout").innerHTML = username;
            document.getElementById("email-logout").innerHTML = email;
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("error-email").style.color = "black";
            document.getElementById("error-username").style.color = "black";
            location.reload();
        }, 500);

    }
}


document.getElementById("login-form").addEventListener("submit", getLoginInfo);