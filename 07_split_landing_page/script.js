const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", leftToggle);
leftEl.addEventListener("mouseleave", leftToggle);

rightEl.addEventListener("mouseenter", rightToggle);
rightEl.addEventListener("mouseleave", rightToggle);

function leftToggle() {
  leftEl.classList.toggle("activated");
}

function rightToggle() {
  rightEl.classList.toggle("activated");
}
