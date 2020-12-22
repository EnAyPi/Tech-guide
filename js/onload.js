function onloadlogin() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("login-name").innerHTML = localStorage.getItem("username");
        document.getElementById("login-name-2").innerHTML = localStorage.getItem("username");
        document.getElementById("username-logout").innerHTML = localStorage.getItem("username");
        document.getElementById("email-logout").innerHTML = localStorage.getItem("email");
    } else {
        document.getElementById("comment-login-remind").style.display = "inline"
        document.getElementById("comment-form").addEventListener("click", login);
    }
}

function onloadmainindex() {
    let more = document.getElementsByClassName("more");
    for (let i = 0; i < more.length; i++) {
        more[i].style.display = "none";
    }
    for (let i = 0; i < 4; i++) {
        more[i].style.display = "flex";
    }
    let count_more = 4;
    let count_more_2 = 0;
    document.getElementById("watch-more").addEventListener("click", function () {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";

        setTimeout(() => {
            count_more_2 = count_more + 2;

            console.log("count_more_2: " + count_more_2);
            for (count_more = 0; count_more <= count_more_2; count_more++) {
                if (more[count_more] != undefined) {
                    more[count_more].style.display = "flex";
                }
            }
            document.getElementById("loading-icon").style.display = "none";
            document.getElementById("watch-more").style.display = "block";
            if (count_more_2 > more.length - 1) {
                document.getElementById("watch-more").style.display = "none";
            }

        }, 500);

    });
}

function onloadcomment() {
    for (let i = 1; i <= Number(localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - number_comment")); i++) {
        let comment_box = localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - comment_content" + i);
        let fullname = localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - comment_user" + i);
        let lettericon = fullname[0].toUpperCase();
        let output = "<div class=\"comment-list\"><h1>" + lettericon + "</h1><p style=\"color: #04416D; margin-right: 10px;\">" + fullname + "</p><p>" + comment_box + "</p></div>";
        document.getElementById("comment-list").innerHTML += output;
    }
    document.getElementById("number-comment").innerHTML = Number(localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - number_comment")) + " bình luận";
}