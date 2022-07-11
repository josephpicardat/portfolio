// 99% of the following code in this js code is from w3schools.com. I wish I could have spent the time to do it myself, but didn't. https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
// var x=10;
// console.log(x);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // console.log("normal");
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // console.log("away");
  }
  prevScrollpos = currentScrollPos;
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("overlayNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlayNav").style.width = "0%";
}