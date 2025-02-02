import "./common.css";
import "./header.css";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  navMenu.classList.toggle("is-open");
};

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
