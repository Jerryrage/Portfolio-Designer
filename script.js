const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const headerIcon = header.querySelector(".burger-menu__icon");
console.log('headerIcon', headerIcon)
console.log('burger', burger)

burger.addEventListener("click", function () {
    header.classList.toggle("header--mobile");




     headerIcon.src = "images/burger-menu-close.svg"
});
