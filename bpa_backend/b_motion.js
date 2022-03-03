var scroll = 0;
$(document).scroll(function() {
    scroll = $(document).scrollTop();
    console.log(scroll);
    if (scroll > 150) {
        document.getElementById("bin").style.opacity = 1;
        document.getElementById("bin_2").style.opacity = 1;
        document.getElementById("bin_3").style.opacity = 1;
    }
    if (scroll < 150) {
        document.getElementById("bin").style.opacity = 0;
        document.getElementById("bin_2").style.opacity = 0;
        document.getElementById("bin_3").style.opacity = 0;
    }
})