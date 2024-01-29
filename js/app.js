const BODY = document.querySelector("html");
const HEADER = document.querySelector("header");
const MENU_BURGER = document.querySelector(".header-burger");
const MENU_LINKS = document.querySelector(".header-links");

MENU_BURGER.addEventListener("click", toggleMenu);

window.addEventListener("scroll", opacityMenu);

function toggleMenu() {
    MENU_LINKS.classList.toggle('open');
}

function opacityMenu() {
    if (window.pageYOffset > 0) {
        HEADER.classList.add('open');
    }else{
        HEADER.classList.remove('open');
    }
    console.log("scroll");
}