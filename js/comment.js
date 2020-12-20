let comments = 0;
function comment(event) {
    event.preventDefault();
    comments++;
    let comment_box = document.getElementById("comment-box").value;
    let fullname = localStorage.getItem("username");
    let lettericon = fullname[0].toUpperCase();
    let output = "<div class=\"comment-list\"><h1>" + lettericon + "</h1><p style=\"color: #04416D; margin-right: 10px;\">" + fullname + "</p><p>" + comment_box + "</p></div>";
    document.getElementById("comment-list").innerHTML += output;
    document.getElementById("comment-box").value = "";
    document.getElementById("number-comment").innerHTML = comments + " bình luận";
}

document.getElementById("comment-form").addEventListener("submit", comment);

