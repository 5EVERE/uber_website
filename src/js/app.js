"use strict";
document
  .querySelector(".subheader_logo")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  });

const menu = document.querySelector(".menu"),
  menuItem = document.querySelectorAll(".menu_item"),
  hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_active");
  menu.classList.toggle("menu_active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });
});
