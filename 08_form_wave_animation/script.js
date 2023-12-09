const labels = document.querySelectorAll(".label");

labels.forEach(label => {
  const markup = label.innerHTML
    .split("")
    .map((e, i) => {
      return `<span style="transition-delay: ${i * 50}ms" class="span">${e}</span>`;
    })
    .join("");
  label.innerHTML = markup;
});
