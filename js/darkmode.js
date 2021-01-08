document.getElementById("darkmode-label").addEventListener("change", darkmode_switch);

function darkmode_switch() {
    let div = document.getElementsByTagName("div");
    let p = document.getElementsByTagName("p");
    let h1 = document.getElementsByTagName("h1");
    let a = document.getElementsByTagName("a");
    let list_child = document.getElementsByClassName("list-child");
    let list = document.getElementsByClassName("list");
    let i_icon = document.getElementsByTagName("i");
    let label = document.getElementsByTagName("label");
    let b = document.getElementsByTagName("b");
    let h2 = document.getElementsByTagName("h2");

    if (document.getElementById("darkmode").checked) {
        localStorage.setItem("darkmode", "true");
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = "#1c1720";
        }
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "white";
        }
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = "white";
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "white";
        }
        for (let i = 0; i < list_child.length; i++) {
            list_child[i].style.backgroundColor = "#1c1720";
        }
        for (let i = 0; i < i_icon.length; i++) {
            i_icon[i].style.color = "white";
        }
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "white";
        }
        for (let i = 0; i < b.length; i++) {
            b[i].style.color = "white";
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "white";
        }
        for (let i = 0; i < list.length; i++) {
            list[i].style.borderTop = "3px solid white";
            list[i].style.boxShadow = "none";
        }
        document.getElementById("login-screen").style.backgroundColor = "";
        document.getElementById("logout-screen").style.backgroundColor = "";
        document.getElementById("login-form").style.backgroundColor = "#1c1720";
        document.getElementById("logout-form").style.backgroundColor = "#1c1720";
        document.getElementById("slider").style.backgroundColor = "white";
        document.getElementById("top-up").style.backgroundColor = "white";
        document.getElementById("toggle-icon-1").style.backgroundColor = "white";
        document.getElementById("toggle-icon-3").style.backgroundColor = "white";

        if(count_nav_toggle % 2 == 0){
            document.getElementById("toggle-icon-2").style.backgroundColor = "white";
        }else{
            document.getElementById("toggle-icon-2").style.backgroundColor = "black";
        }

        if (document.getElementById("watch-more") != null) {
            document.getElementById("watch-more").style.backgroundColor = "#1c1720";
            document.getElementById("watch-more").style.color = "white";
        }

        if(document.getElementById("icon").src != "https://i.imgur.com/H16xz30.png"){
            document.getElementById("icon").src = "https://i.imgur.com/Teyt1oJ.png";
        }
    } else {
        localStorage.removeItem("darkmode")
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = "";
        }
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "";
        }
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = "";
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "";
        }
        for (let i = 0; i < list_child.length; i++) {
            list_child[i].style.backgroundColor = "";
        }
        for (let i = 0; i < i_icon.length; i++) {
            i_icon[i].style.color = "";
        }
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "";
        }
        for (let i = 0; i < b.length; i++) {
            b[i].style.color = "";
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "";
        }
        for (let i = 0; i < list.length; i++) {
            list[i].style.borderTop = "3px solid blue";
            list[i].style.boxShadow = "2px 2px 2px lightgray";
        }
        document.getElementById("login-screen").style.backgroundColor = "rbga(0,0,0,0.4)";
        document.getElementById("logout-screen").style.backgroundColor = "rbga(0,0,0,0.4)";
        document.getElementById("login-form").style.backgroundColor = "white";
        document.getElementById("logout-form").style.backgroundColor = "white";

        document.getElementById("toggle-icon-1").style.backgroundColor = "black";
        document.getElementById("toggle-icon-3").style.backgroundColor = "black";

        if(count_nav_toggle % 2 == 0){
            document.getElementById("toggle-icon-2").style.backgroundColor = "black";
        }else{
            document.getElementById("toggle-icon-2").style.backgroundColor = "white";
        }

        if (document.getElementById("watch-more") != null) {
            document.getElementById("watch-more").style.backgroundColor = "white";
            document.getElementById("watch-more").style.color = "black";
        }
        if(document.getElementById("icon").src != "https://i.imgur.com/H16xz30.png"){
            document.getElementById("icon").src = "https://i.imgur.com/EZknHz3.png";
        }
    }
}