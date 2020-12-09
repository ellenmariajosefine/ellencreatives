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

    boxes[i].style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg)`;
 });

}, false);
}
