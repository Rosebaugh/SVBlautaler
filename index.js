function reload(){
    var element = document.getElementById("upcoming");
    var col = document.getElementById("mainColumn");

    col.classList.remove("column");
    col.classList.remove("NotAColumn");

    if(!element.checkVisibility()){
        col.classList.add("NotAColumn");
    }
    else{
        col.classList.add("column");
    }
    loadFacebook();
}
function loadFacebook(){
    var fb = document.getElementById("facebook");
    var fbContainer = document.getElementById("fbDiv");
    var src = "https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fsvblautaler&width=" + fbContainer.clientWidth + "&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=" + 900;

    var offset = document.getElementById("header").offsetHeight + document.getElementById("footer").offsetHeight + 250;

    fb.setAttribute("src", src);
    fb.setAttribute("height", screen.height - offset);
    fb.setAttribute("width", fbContainer.clientWidth - 20);
}