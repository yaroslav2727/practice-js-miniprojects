const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");
const barlineEl = document.querySelector(".bar-line");

prevEl.disabled = true;

prevEl.addEventListener("click", onPrev);
nextEl.addEventListener("click", onNext);

function onPrev() {
    let actives = document.querySelectorAll(".active");
    actives[actives.length - 1].classList.remove("active");
    nextEl.disabled = false;
    actives = document.querySelectorAll(".active");
    const circles = document.querySelectorAll(".circle");
    barlineEl.style.width = `${
        (100 / (circles.length - 1)) * (actives.length - 1)
    }%`;
    if (actives.length === 1) {
        prevEl.disabled = true;
    }
}

function onNext() {
    const actives = document.querySelectorAll(".active");
    document
        .querySelectorAll(".circle")
        [actives.length]?.classList.add("active");
    prevEl.disabled = false;
    if (!document.querySelectorAll(".circle")[actives.length + 1]) {
        nextEl.disabled = true;
    }
    const circles = document.querySelectorAll(".circle");
    barlineEl.style.width = `${(100 / (circles.length - 1)) * actives.length}%`;
}
