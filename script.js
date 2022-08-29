const scrolldown = document.querySelector(".scroll-down");
let darl_icon = document.querySelector(".icon-1");
let bar_icon = document.querySelector(".bar-icon");
let nav_bar = document.querySelector(".links");
let project_sec = document.querySelector(".projects");
let project_div = document.querySelectorAll(".projects .project1");

let text = document.querySelector(".first-text");
let mytext = "mahmoud Frontend Develober";

let i = 0;
function typetext() {
  let start = setInterval(() => {
    text.textContent += mytext[i];
    i++;
    if (i == mytext.length) {
      clearInterval(start);
    }
  }, 400);
}
typetext();

/*################################### */

scrolldown.addEventListener("click", function () {
  scroll(0, 600);
});

darl_icon.addEventListener("click", function () {
  darl_icon.classList.toggle("fa-sun");
  document.body.classList.toggle("dark-theme");
});

// dark-theme
bar_icon.onclick = function () {
  nav_bar.classList.toggle("display");
};

// scroll button
let scroll_btn = document.querySelector(".scroll-btn");

window.onscroll = function () {
  if (window.scrollY > 460) {
    scroll_btn.style.display = "block";
  } else {
    scroll_btn.style.display = "none";
  }
};
scroll_btn.onclick = function () {
  scroll(0, 0);
};

let section = document.querySelector(".about");
let numbers = document.querySelectorAll(".num");
let start = false;

function startcount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 4000 / goal);
}
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 30) {
    if (!start) {
      numbers.forEach((num) => startcount(num));
    }
    start = true;
  }
};

/*############################### */
const sr = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 2800,
  delay: 400,
  reset: true,
});
window.onload = function () {
  sr.reveal(`.home .person-image`, { delay: 500 });
  sr.reveal(`.about .person-image`, { delay: 500, origin: "top" });
  sr.reveal(`.skills .left-side`, { delay: 600, origin: "left" });
  sr.reveal(`.mail`, { delay: 500, origin: "top" });
  sr.reveal(`.phone `, { delay: 600, origin: "top" });
  sr.reveal(`.address `, { delay: 700, origin: "top" });
};

// for swiper
