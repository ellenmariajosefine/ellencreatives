/* // select the navigation buttons
let sliderWindow = document.querySelector(".slides-container");

let currentIndex = 0;
let slides = document.querySelectorAll(".slider_slide");

sliderWindow.addEventListener('scroll',function (){
    // hide the current slide
    slides[currentIndex].style.display = "none";
 
    // decrement the index
    currentIndex--;
 
    // show the previous slide
    slides[currentIndex].style.display = "block";
 }
 
 sliderNavButtons[1].onclick = function() {
    // hide the current slide
    slides[currentIndex].style.display = "none";
 
    // increment the index
    currentIndex++;
 
    // show the next slide
    slides[currentIndex].style.display = "block";
}) 
 */

/* let lastScrollTop = 0;
let sliderWindow = document.querySelector(".slides-container");

    sliderWindow.addEventListener("scroll", function(){ 
    let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      // hide the current slide
    slides[currentIndex].style.display = "none";
 
    // decrement the index
    currentIndex--;
 
    // show the previous slide
    slides[currentIndex].style.display = "block";

   } else {
      // hide the current slide
    slides[currentIndex].style.display = "none";
 
    // increment the index
    currentIndex++;
 
    // show the next slide
    slides[currentIndex].style.display = "block";
   }
}) */

/* const scrollableElement = document.body; 
let currentIndex = 0;
let slides = document.querySelectorAll(".slider-slide");
console.log(slides);


scrollableElement.addEventListener('wheel', checkScrollDirection);
console.log(slides);
function checkScrollDirection(event) {
    if (currentIndex <= currentIndex.length) {
        if (checkScrollDirectionIsUp(event)) {
            console.log(slides);
            // hide the current slide
            console.log(up)
            noSlides[currentIndex].style.position = "relative".left = '-100%';

            // decrement the index
            currentIndex--;
            // show the previous slide
            slides[currentIndex].style.position = "relative".left = '-100%';
        } else {
            console.log(slides);
            // hide the current slide
            slides[currentIndex].style.position = "relative".left = '100%';

            // increment the index
            currentIndex++;

            // show the next slide
            slides[currentIndex].style.position = "relative".left = '100%';
        }
    }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
} */

/* const scrollableElement = document.body; 
let currentIndex = 0;
let slides = document.querySelectorAll(".slider-slide");
console.log(slides);


scrollableElement.addEventListener('wheel', checkScrollDirection);
console.log(slides);
function checkScrollDirection(event) {
    if (currentIndex <= currentIndex.length) {
        if (checkScrollDirectionIsUp(event)) {
            slides.addClass('slide-left')
        } else {
            slides.addClass('slide-right')
        }
    }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
} */


/* const scrollableElement = document.body; 
let currentIndex = 0;
let slides = document.querySelectorAll(".slider-slide");
console.log(slides);

scrollableElement.addEventListener('wheel', checkScrollDirection);
console.log(slides);
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log(slides);
      // hide the current slide
    slides[currentIndex].setAttribute('display','none')
 
      // decrement the index
      currentIndex--;

      // show the previous slide
      slides[currentIndex].setAttribute('display','block')
  } else {
    console.log(slides);
          // hide the current slide
          slides[currentIndex].setAttribute('display','none')
 
          // increment the index
          currentIndex++;
       
          // show the next slide
          slides[currentIndex].setAttribute('display','block')
  }
} */

/* function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
} */

// STOPPING SLIDES WITH NAV BTNS
let currentIndex = 0;
let newIndex = 0; // keep track of the new slide

let slides = document.getElementsByClassName("slider_slide");
let sliderNavButtons = document.getElementsByClassName("slider_nav");
let slidesLength = slides.length; // number of slides

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