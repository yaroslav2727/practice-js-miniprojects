const boxes = document.querySelectorAll(".content");

window.addEventListener("scroll", boxAnimation);

boxAnimation();

function boxAnimation() {
    const trigger = window.innerHeight * 0.9;
    for (const box of boxes) {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < trigger) {
            box.classList.add("show");
        }
        if (boxTop > trigger) {
            box.classList.remove("show");
        }
    }
}
