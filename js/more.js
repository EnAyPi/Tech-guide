let more = document.getElementsByClassName("more");
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