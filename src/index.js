import "./common.css";
import "./header.css";
import "./hero.css";

const bodyScrollLock = require("body-scroll-lock");
const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-mobile");
const navMenuList = document.querySelector(".nav-mobile .nav-menu-list");

const toggleMenu = () => {
  const isActive = menuToggle.getAttribute("aria-expanded") === "true";
  console.log("boolean value: ", isActive);
  const string = "true";
  console.log("non-boolean value: ", string);

  menuToggle.setAttribute("aria-expanded", !isActive);

  isActive
    ? bodyScrollLock.enableBodyScroll(document.body)
    : bodyScrollLock.disableBodyScroll(document.body);

  navMenu.classList.toggle("active");
};

const scrollToSection = (event) => {
  if (event.target.nodeName !== "A") return;
  toggleMenu();
};

menuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
navMenuList.addEventListener("click", scrollToSection);
