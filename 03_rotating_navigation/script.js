const buttonEl = document.querySelector("#menu");
const containerEl = document.querySelector("#container");
const navEl = document.querySelector("#nav");

let isOpen = false;

buttonEl.addEventListener("click", () => {
    containerEl.classList.toggle("rotated");
    navEl.classList.toggle("shown");
    if (!isOpen) {
        buttonEl.textContent = "x";
        isOpen = true;
    } else {
        buttonEl.textContent = "o";
        isOpen = false;
    }
});
