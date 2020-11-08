var coll = document.getElementsByClassName("projectSlider");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("sliderActive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight*2 + "px";
    }
  });
}

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var hamburgerContent = document.querySelector("#header");
var navigation = document.querySelector(".navigation");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  hamburgerContent.classList.toggle("active");
  navigation.classList.toggle("activeNav");


});