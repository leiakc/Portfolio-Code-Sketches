// window.onload = function() {
//
// };

var menuOpen = false;

function hideShow() {
    menuOpen = !menuOpen;

    if (menuOpen == false){
      document.getElementById("menu").style.display = "block";
    } else if (menuOpen == true) {
      document.getElementById("menu").style.display = "none";
    }
}
