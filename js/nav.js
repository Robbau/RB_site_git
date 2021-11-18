
// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
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




// var coll = document.getElementsByClassName("projectSlider");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


// (function() {

// 	let hamburger = {
// 		nav: document.querySelector('#nav'),
// 		navToggle: document.querySelector('.nav-toggle'),

// 		initialize() {
// 			this.navToggle.addEventListener('click',
//         () => { this.toggle(); });
// 		},

// 		toggle() {
// 			this.navToggle.classList.toggle('expanded');
// 			this.nav.classList.toggle('expanded');
// 		},
// 	};

// 	hamburger.initialize();

// }());
