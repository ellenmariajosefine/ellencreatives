// FILTER FUNCTION : CASES

filterObjects("all")
function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filters");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



//ROTATION SCRIPT
const boxes = document.querySelectorAll(".box");
const range = 50;
console.log(boxes);
const calcValue = (a,b) => (a/b * range - range / 2).toFixed(1);

let timeout;
for (let i = 0; i < boxes.length; i++) {
boxes[i].addEventListener('mousemove', ({x,y}) => {
  if(timeout){
    window.cancelAnimationFrame(timeout)
  }

  timeouot = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    boxes[i].style.transform = `rotateX(${yValue}deg) rotateY(${yValue}deg)`;
 });

}, false);
}