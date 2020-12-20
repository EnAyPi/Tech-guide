
let div = document.getElementById("myDropdown");
let a = div.getElementsByTagName("a");
for (let j = 0; j < a.length; j++) {
    a[j].style.display = "none";
}


function filterFunction() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let count_search = 0;

    for (let m = 0; m < a.length; m++) {
        if(a[m].innerText.length > 25){
            a[m].innerText = a[m].innerText.slice(0,25) + "...";
        }
    }

    if (input.value.length == 0) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    } else {
        for (let i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 && count_search <= 4) {
                a[i].style.display = "block";
                console.log(count_search);
                count_search++;
            } else {
                a[i].style.display = "none";
            }
        }
        if (count_search == 0) {
            document.getElementById("search-not-found").style.display = "block";
        } else {
            document.getElementById("search-not-found").style.display = "none";
        }
    }

}

document.getElementById("searchInput").addEventListener("keyup", function (event) {
    document.getElementById("searchInput").addEventListener("keypress", function () {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    });
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-icon").click();
    } else if (event.keyCode === 8) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    } else if (event.keyCode === 46) {
        for (let j = 0; j < a.length; j++) {
            a[j].style.display = "none";
        }
    }
});