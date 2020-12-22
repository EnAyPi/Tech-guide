let comments = localStorage.getItem(document.getElementsByTagName("title")[0].innerText + " - number_comment");
document.getElementsByTagName("title")[0].innerText

function comment(event) {
    event.preventDefault();
    comments++;
    localStorage.setItem(document.getElementsByTagName("title")[0].innerText + " - number_comment",comments);
    let comment_box = document.getElementById("comment-box").value;
    let fullname = localStorage.getItem("username");
    let lettericon = fullname[0].toUpperCase();
    localStorage.setItem(document.getElementsByTagName("title")[0].innerText + " - comment_user" + comments,fullname);
    localStorage.setItem(document.getElementsByTagName("title")[0].innerText + " - comment_content" + comments,comment_box);
    let output = "<div class=\"comment-list\"><h1>" + lettericon + "</h1><p style=\"color: #04416D; margin-right: 10px;\">" + fullname + "</p><p>" + comment_box + "</p></div>";
    document.getElementById("comment-list").innerHTML += output;
    document.getElementById("comment-box").value = "";
    document.getElementById("number-comment").innerHTML = comments + " bình luận";
}

document.getElementById("comment-form").addEventListener("submit", comment);