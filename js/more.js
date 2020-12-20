let count_more = 2;
document.getElementById("watch-more").addEventListener("click", function () {
    if (count_more == 2) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        setTimeout(() => {
            document.getElementById("more2").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            count_more++;
        }, 1000);

    } else if (count_more == 3) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        setTimeout(() => {
            document.getElementById("more3").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            count_more++;
        }, 1000);

    } else if (count_more == 4) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        setTimeout(() => {
            document.getElementById("more4").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            count_more++;
        }, 1000);
    } else if (count_more == 5) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        setTimeout(() => {
            document.getElementById("more5").style.display = "block";
            document.getElementById("watch-more").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            count_more++;
        }, 1000);
    } else if (count_more == 6) {
        document.getElementById("loading-icon").style.display = "block";
        document.getElementById("watch-more").style.display = "none";
        setTimeout(() => {
            document.getElementById("more6").style.display = "block";
            document.getElementById("loading-icon").style.display = "none";
            count_more++;
        }, 1000);
    }
});