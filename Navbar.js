function loadNavbar(){
    $("#desktopNav").load("navbarDesktop.html");
    $("#mobileNav").load("navbarMobile.html");
}

function toggleHamburger(target){
    target.classList.toggle("change");
    var x = document.getElementById("links");
    if (x.className === "closed") {
        x.className = "open";
    } else {
        x.className = "closed";
    }
}