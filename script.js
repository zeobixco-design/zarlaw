const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const button = document.getElementById("nav-button");
const ul = document.getElementById("ul");
const ulleft = ul.offsetLeft;
const openerr = 40;
const closedd = -205;

button.addEventListener("click", function () {
    if (ul.offsetLeft === openerr) {
        ul.style.left = closedd + "px";
    } else {
        ul.style.left = openerr + "px";
    }
    if (ul.offsetLeft === openerr) {
        ul.style.left = closed + "px";
    }

}); 