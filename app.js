let today = new Date();
let current_day = today.getDay();
let day_name;
switch (current_day) {
    case 0:
        day_name = "Chủ nhật";
        break;
    case 1:
        day_name = "Thứ hai";
        break;
    case 2:
        day_name = "Thứ ba";
        break;
    case 3:
        day_name = "Thứ tư";
        break;
    case 4:
        day_name = "Thứ năm";
        break;
    case 5:
        day_name = "Thứ sáu";
        break;
    case 6:
        day_name = "Thứ bảy";
        break;
}
let date = day_name + ", " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#top-up').fadeIn(200);
    }
    else {
        $('#top-up').fadeOut(200);
    }
});

$(function () {
    $('#top-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        document.getElementById("icon").style.width = "110px";
        document.getElementById("icon").style.transition = "width 0.2s"
        document.getElementById("icon").src = "https://i.imgur.com/H16xz30.png";

    } else {
        document.getElementById("icon").style.width = "30px";
        document.getElementById("icon").src = "https://i.imgur.com/AmJmzJv.png";
    }
});

$(document).ready(function () {
    $('a').bind('mouseover', function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        $(this).css("color", color);
    });
});

$(document).ready(function () {
    $('a').bind('mouseleave', function () {
        $(this).css("color", "black");
    });
});

let more_count = 0;
document.getElementById("watch-more").addEventListener("click", function () {
    if (more_count == 0) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more2").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            more_count++;
        }, 1000);

    } else if (more_count == 1) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more3").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            more_count++;
        }, 1000);

    } else {
        document.getElementById("watch-more").style.display = "none";
    }
});


let count_nav = 1;
function nav_responsive() {
    if (count_nav % 2 == 1) {
        document.getElementById("nav-res").style.display = "flex";
        document.getElementById("nav-res").style.position = "fixed";
        document.getElementById("nav-res").style.top = "0px";
        document.getElementById("nav-res-border").style.transform = "scaleY(1)";
        document.getElementById("nav-res-border").style.transition = "transform 0.3s";
        count_nav++;
    } else {
        document.getElementById("nav-res-border").style.transform = "scaleY(0.1)"
        document.getElementById("nav-res-border").style.transition = "transform 0.3s"
        setTimeout(() => {
            document.getElementById("nav-res").style.display = "none";
        }, 300);

        count_nav++;
    }
}

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
    document.getElementById("username-logout").innerHTML = username;
    document.getElementById("email-logout").innerHTML = email;
}

function onloadLogin() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("login-name").innerHTML = localStorage.getItem("username");
        document.getElementById("username-logout").innerHTML = localStorage.getItem("username");
        document.getElementById("email-logout").innerHTML = localStorage.getItem("email");
    }
}

document.getElementById("login-form").addEventListener("submit", getLoginInfo);