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
        day_name = "Thứ sau";
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
