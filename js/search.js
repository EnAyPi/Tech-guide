function filterFunction() {
    let more = document.getElementsByClassName("more");
    let filter = sessionStorage.getItem("search").toUpperCase();
    let count_search = 0;
    document.getElementById("searchInput").value = sessionStorage.getItem("search");
    document.getElementById("search-result").innerText = sessionStorage.getItem("search");
    for (let i = 0; i < more.length; i++) {
        txtValue = more[i].getElementsByTagName("h1")[0].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            more[i].style.display = "flex";
            count_search++;
        } else {
            more[i].style.display = "none";
        }
    }
    if (count_search == 0) {
        document.getElementById("search-not-found").style.display = "block";
    } else {
        document.getElementById("search-not-found").style.display = "none";
    }
}
document.getElementById("searchInput").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (document.getElementById("searchInput").value.trim() != "") {
        sessionStorage.setItem("search", document.getElementById("searchInput").value);
        if (event.keyCode === 13) {
            document.getElementById("search-icon").click();
        }
    }

});

document.getElementById("search2").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (document.getElementById("search2").value.trim() != "") {
        sessionStorage.setItem("search", document.getElementById("search2").value);
        if (event.keyCode === 13) {
            document.getElementById("search-icon").click();
        }
    }

});

function tosearch() {
    if (document.getElementById("searchInput").value.trim() != "") {
        sessionStorage.setItem("search", document.getElementById("searchInput").value);
        document.getElementById("search-icon").click();
    }
}
function tosearch2() {
    if (document.getElementById("search2").value.trim() != "") {
        sessionStorage.setItem("search", document.getElementById("search2").value);
        document.getElementById("search-icon").click();
    }
}