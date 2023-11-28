const header_menu_hamburger = document.querySelector(".header_menu_hamburger");
const header_nav = document.querySelector(".header_nav");
const header_menu_div = document.querySelector(".header_menu_div");

header_menu_hamburger.onclick = () => {
  header_nav.classList.toggle("active");
  header_menu_div.classList.toggle("active");
}