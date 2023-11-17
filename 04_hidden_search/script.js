const buttonEl = document.querySelector(".button");
const inputEl = document.querySelector(".input");

buttonEl.addEventListener("click", (event) => {
    if (inputEl.value === "") {
        inputEl.classList.toggle("active");
        buttonEl.classList.toggle("pressed");
        if (inputEl.classList.contains("active")) {
            inputEl.focus();
        }
    } else {
        console.log("performing search...");
    }
});
