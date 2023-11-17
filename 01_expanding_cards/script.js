let activeBox = null;

document.querySelector("main").addEventListener("click", (event) => {
    if (event.target.classList.contains("image")) {
        if (activeBox === event.target.closest(".box")) {
            activeBox.classList.remove("active");
            activeBox = null;
            return;
        }
        activeBox?.classList.remove("active");
        activeBox = event.target.closest(".box");
        activeBox.classList.add("active");
    }
});
