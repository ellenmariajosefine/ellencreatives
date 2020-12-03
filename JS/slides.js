// STOPPING SLIDES WITH NAV BTNS
let currentIndex = 0;
let newIndex = 0; // keep track of the new slide

let slides = document.getElementsByClassName("slider-slide");
let sliderNavButtons = document.getElementsByClassName("slider_nav");
let slidesLength = slides.length; // number of slides
console.log(slides);
console.log(sliderNavButtons);
console.log(slidesLength);

function navigateSlider() {
   if (newIndex === -1) newIndex = 0;
   else if (newIndex === slidesLength) newIndex = slidesLength - 1;

   sliderNavButtons[0].disabled = (newIndex === 0) ? true : false;
   sliderNavButtons[1].disabled = (newIndex === slidesLength - 1) ? true : false;

   slides[currentIndex].style.display = "none";
   slides[newIndex].style.display = "block";
   currentIndex = newIndex;
}

sliderNavButtons[0].onclick = function() {
  newIndex--;
  navigateSlider();
};

sliderNavButtons[1].onclick = function() {
  newIndex++;
  navigateSlider();
};