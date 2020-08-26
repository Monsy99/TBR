var burger = document.querySelector(".navigation__burger");
var menu = document.querySelector(".mobileMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--open");
  menu.classList.toggle("mobileMenu--open");
});
menu.addEventListener("click", () => {
  burger.classList.remove("burger--open");
  menu.classList.remove("mobileMenu--open");
});
