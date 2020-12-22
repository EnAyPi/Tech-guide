function onloadfunction() {
    if (localStorage.getItem("username") != undefined) {
        document.getElementById("login-name").innerHTML = localStorage.getItem("username");
        document.getElementById("login-name-2").innerHTML = localStorage.getItem("username");
        document.getElementById("username-logout").innerHTML = localStorage.getItem("username");
        document.getElementById("email-logout").innerHTML = localStorage.getItem("email");
    } else {
        document.getElementById("comment-login-remind").style.display = "inline"
        document.getElementById("comment-form").addEventListener("click", login);
    }
    for (let i = 1; i <= Number(localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - number_comment")); i++) {
        let comment_box = localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - comment_content" + i);
        let fullname = localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - comment_user" + i);
        let lettericon = fullname[0].toUpperCase();
        let output = "<div class=\"comment-list\"><h1>" + lettericon + "</h1><p style=\"color: #04416D; margin-right: 10px;\">" + fullname + "</p><p>" + comment_box + "</p></div>";
        document.getElementById("comment-list").innerHTML += output;
    }
    document.getElementById("number-comment").innerHTML = Number(localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - number_comment")) + " bình luận";

}