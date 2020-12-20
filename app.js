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

let count_more = 2;
document.getElementById("watch-more").addEventListener("click", function () {
    if (count_more == 2) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more2").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            count_more++;
        }, 1000);

    } else if (count_more == 3) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more3").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            count_more++;
        }, 1000);

    } else if (count_more == 4) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more4").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            count_more++;
        }, 1000);
    } else if (count_more == 5) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more5").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            count_more++;
        }, 1000);
    } else if (count_more == 6) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        document.getElementById("loading").style.transform = "rotate(360deg)";
        document.getElementById("loading").style.transition = "transform 1s";
        setTimeout(() => {
            document.getElementById("more6").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("loading").style.transform = "rotate(0deg)";
            count_more++;
        }, 1000);
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



let div = document.getElementById("myDropdown");
let a = div.getElementsByTagName("a");
for (let j = 0; j < a.length; j++) {
    a[j].style.display = "none";
}

function filterFunction() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let count_search = 0;
    if (input.value.length == 0) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    } else {
        for (let i = 0; i < a.length; i++) {

            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 && count_search <= 4) {
                a[i].style.display = "block";
                console.log(count_search);
                count_search++;
            } else {
                a[i].style.display = "none";
            }
        }
        if (count_search == 0) {
            document.getElementById("search-not-found").style.display = "block";
        } else {
            document.getElementById("search-not-found").style.display = "none";
        }
    }

}

document.getElementById("searchInput").addEventListener("keyup", function (event) {
    document.getElementById("searchInput").addEventListener("keypress", function () {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    });
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-icon").click();
    } else if (event.keyCode === 8) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    } else if (event.keyCode === 46) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    }
});