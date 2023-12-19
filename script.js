const MINIPROJECTS = [
  "01_expanding_cards",
  "02_progress_steps",
  "03_rotating_navigation",
  "04_hidden_search",
  "05_blurry_loading",
  "06_scroll_animation",
  "07_split_landing_page",
  "08_form_wave_animation",
  "09_sound_board",
];

const markup = MINIPROJECTS.map(element => {
  return `<li><a href="./${element}/index.html">${element}</a></li>`;
}).join("");

document.querySelector(".main").innerHTML = `<ul>${markup}</ul>`;
