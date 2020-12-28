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

let count_nav = 1;
function nav_responsive() {
    if (count_nav % 2 == 1) {
        document.getElementById("nav-res").style.display = "flex";
        document.getElementById("nav-res").style.position = "fixed";
        document.getElementById("nav-res").style.top = "0px";
        document.getElementsByClassName("body")[0].style.transform = "translateY(370px)";
        document.getElementsByClassName("body")[0].style.transition = "transform 0.3s";
        document.getElementsByClassName("footer")[0].style.transform = "translateY(370px)";
        document.getElementsByClassName("footer")[0].style.transition = "transform 0.3s";
        document.getElementById("nav-res-border").style.transform = "scaleY(1)";
        document.getElementById("nav-res-border").style.transition = "transform 0.3s";
        document.getElementById("navbar-toggler").innerHTML = "<i style=\"font-size: 25px;\" class=\"fas fa-times\"></i>"
        let i_icon = document.getElementsByTagName("i");
        if (document.getElementById("darkmode").checked) {
            for (let i = 0; i < i_icon.length; i++) {
                i_icon[i].style.color = "white";
            }
        }else{
            for (let i = 0; i < i_icon.length; i++) {
                i_icon[i].style.color = "";
            }
        }
        count_nav++;
    } else {
        document.getElementById("nav-res-border").style.transform = "scaleY(0.1)"
        document.getElementsByClassName("body")[0].style.transform = "translateY(0)";
        document.getElementsByClassName("footer")[0].style.transform = "translateY(0)";
        document.getElementById("navbar-toggler").innerHTML = "<i style=\"font-size: 25px;\" class=\"fas fa-align-justify\"></i>"
        let i_icon = document.getElementsByTagName("i");
        if (document.getElementById("darkmode").checked) {
            for (let i = 0; i < i_icon.length; i++) {
                i_icon[i].style.color = "white";
            }
        }else{
            for (let i = 0; i < i_icon.length; i++) {
                i_icon[i].style.color = "";
            }
        }
        setTimeout(() => {
            document.getElementById("nav-res").style.display = "none";
        }, 300);

        count_nav++;
    }
}