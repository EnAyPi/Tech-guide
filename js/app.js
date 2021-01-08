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