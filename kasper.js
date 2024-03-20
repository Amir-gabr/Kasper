let el = document.querySelector("#scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrolling = document.documentElement.scrollTop;
  el.style.width = ` ${(scrolling / height) * 100}% `;
});
//
//==========   menu icon  ============//
let menuIcon = document.querySelector("#menu-icon")
let navBar = document.querySelector(".nav-menu ul");
menuIcon.onclick = () =>
{
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle("active");
};
//
//
let sectionSkills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionSkills.offsetTop - 100) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
//
//
let statsSection = document.querySelector(".stats");
let boxNumbers = document.querySelectorAll(".box .num ");
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      boxNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(e) {
  let goal = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(counter);
    }
  }, 16 / goal);
}