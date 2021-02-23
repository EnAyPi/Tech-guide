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
let date = day_name + ", " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
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
        if (document.getElementById("darkmode").checked) {
            document.getElementById("icon").src = "https://i.imgur.com/Teyt1oJ.png";
        } else {
            document.getElementById("icon").src = "https://i.imgur.com/EZknHz3.png";
        }
    }
});

$(document).ready(function () {
    $("#open-nav").click(function () {
        $("#nav-res-border").slideToggle("medium");
    });
});

let count_nav_toggle = 0;
let toggle_icon_1 = document.getElementById("toggle-icon-1");
let toggle_icon_2 = document.getElementById("toggle-icon-2");
let toggle_icon_3 = document.getElementById("toggle-icon-3");
document.getElementById("open-nav").addEventListener("click", function () {
    if (count_nav_toggle % 2 == 0) {
        toggle_icon_1.style.transform = "rotate(45deg)";
        toggle_icon_1.style.top = "0";
        toggle_icon_3.style.transform = "rotate(-45deg)";
        toggle_icon_3.style.top = "0";
        if (localStorage.getItem("darkmode") != undefined) {
            toggle_icon_2.style.backgroundColor = "black";
        } else {
            toggle_icon_2.style.backgroundColor = "white";
        }
        count_nav_toggle++;
    } else {
        toggle_icon_1.style.transform = "";
        toggle_icon_1.style.top = "-8px";
        toggle_icon_3.style.transform = "";
        toggle_icon_3.style.top = "8px";
        if (localStorage.getItem("darkmode") != undefined) {
            toggle_icon_2.style.backgroundColor = "white";
        } else {
            toggle_icon_2.style.backgroundColor = "black";
        }
        count_nav_toggle++;
    }
});

function scroll_function(){
    let more = document.getElementsByClassName("more");
    for (let i = 0; i < more.length; i++) {
        if (more[i].getBoundingClientRect().top < innerHeight) {
            more[i].classList.add("more-load");
        }else{
            more[i].classList.remove("more-load");
        }
    }
}

scroll_function();

window.addEventListener("scroll", scroll_function);