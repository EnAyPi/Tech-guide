let div = document.getElementById("myDropdown");
let a = div.getElementsByTagName("a");
for (let j = 0; j < a.length; j++) {
    a[j].style.display = "none";
}


function filterFunction() {
    let more = document.getElementsByClassName("more");
    let filter = sessionStorage.getItem("search").toUpperCase();
    let count_search = 0;
    document.getElementById("searchInput").value = sessionStorage.getItem("search");
    document.getElementById("search-result").innerText = sessionStorage.getItem("search");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].innerText;
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
    sessionStorage.setItem("search", document.getElementById("searchInput").value);
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-icon").click();
    }
});

document.getElementById("search2").addEventListener("keyup", function (event) {
    sessionStorage.setItem("search", document.getElementById("search2").value);
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-icon").click();
    }
});