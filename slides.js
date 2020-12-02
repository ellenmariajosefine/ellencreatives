/* SLIDES WITH NAV BTNS - WORKING SOLO */
 
/* let currentIndex = 0; // keep track of the current slide
 let newIndex = 0; // keep track of the new slide
 
 const slides = document.querySelectorAll("slider_slide");
 const sliderNavButtons = document.querySelectorAll("slider_nav");

 let slidesLength = slides.length; // number of slides

function navigateSlider() {
   // check for extreme slides = beyond last/first slide. 
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
 } */

 
// SCROLL DETECTION - WORKING SOLO BUT ONLY IF CONTENT IS BIGGER THAN WINDOW

function scrollEventThrottle(fn) {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function () {
      let previous_known_scroll_position = last_known_scroll_position;
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          fn(last_known_scroll_position, previous_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  scrollEventThrottle((scrollPos, previousScrollPos) => {
    if (previousScrollPos > scrollPos) {
        window.scrollBy(0,-788);
        break;
    } else {
        window.scrollBy(0,788);
        break;
    }
});
  
// ALTERNATIVE SCROll CODE BUT DOESN'T WORK
/*v
ar lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false); */


  // TEST W. COMBINING THE ABOVE. 
 /* This returns console error message: 
    Uncaught TypeError: Cannot read property 'style' of undefined
    at navigateSlider (slides.js:78)
    at slides.js:107
    at slides.js:91 */

/*   let currentIndex = 0; 
  let newIndex = 0;
  
  const slides = document.querySelectorAll("slider_slide");
 
  let slidesLength = slides.length; 
 
 function navigateSlider() {
    let currentIndex = 0; 
    let newIndex = 0; 
    
    const slides = document.querySelectorAll("slider_slide");
   
    let slidesLength = slides.length; 
    
    if (newIndex === -1) newIndex = slidesLength - 1;
    else if (newIndex === slidesLength) newIndex = 0
 
    slides[currentIndex].style.display = "none";
    slides[newIndex].style.display = "block";
    currentIndex = newIndex;
 }

 function scrollEventThrottle(fn) {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function () {
      let previous_known_scroll_position = last_known_scroll_position;
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          fn(last_known_scroll_position, previous_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  scrollEventThrottle((scrollPos, previousScrollPos) => {
    if (previousScrollPos > scrollPos) {
        console.log('up');
        newIndex--;
        navigateSlider();
    } else {
        console.log('down');
        newIndex++;
        navigateSlider();
    }
}); */