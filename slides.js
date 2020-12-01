/* FUNGERANDE KOD MED NAV-KNAPPAR  */
 let currentIndex = 0;
 let newIndex = 0; // keep track of the new slide
 
 const slides = document.querySelectorAll("slider_slide");
 const sliderNavButtons = document.querySelectorAll("slider_nav");

 let slidesLength = slides.length; // number of slides

function navigateSlider() {
   // check for extreme slides
   if (newIndex === -1) newIndex = slidesLength - 1;
   else if (newIndex === slidesLength) newIndex = 0

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
 }

 /*  TEST MED SCROLL  */