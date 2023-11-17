const mainEl = document.querySelector(".main");
const textEl = document.querySelector(".loading-text");

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }
    textEl.innerHTML = `${load}%`;
    textEl.style.opacity = scale(load, 0, 100, 1, 0);
    mainEl.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
