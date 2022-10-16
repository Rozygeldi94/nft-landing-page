import "./style.css";
const openBtn = document.querySelector(".burger-menu__open");
const closeBtn = document.querySelector(".burger-menu__close");
const menu = document.querySelector(".burger-menu");

openBtn.addEventListener("click", () => {
  menu.classList.toggle("_active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("_active");
});
