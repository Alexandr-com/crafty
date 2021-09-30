let menuBtn = document.querySelector('.menu__btn');
let menuNav = document.querySelector('.menu-nav');
let menuNavActive = document.querySelector('.menu-nav__activ');

// Выезжающе меню из кнопки "меню-бургер"
function activeMenu() {
    menuNav.classList.toggle('menu-nav__activ');
}
menuBtn.addEventListener('click', activeMenu);


// Меню-бургер
function menuBurger() {
    menuBtn.classList.toggle('change');
}
menuBtn.addEventListener('click', menuBurger);


// Меню выезжающее с левой стороны экрана на экранах меньше 568px
let menuBtn_left = document.querySelector('.btn-left');

function activeMenu_left() {
    document.querySelector('.menu-left').classList.toggle('menu-left__active');
}
menuBtn_left.addEventListener('click', activeMenu_left);


// Код для contact-form.scss

function closeMenu() {
    menuNav.classList.remove('menu-nav__activ');
    menuBtn.classList.remove('change');
    document.querySelector('.menu-left').classList.remove('menu-left__active');
}
document.querySelector('html').addEventListener('dblclick', closeMenu);
document.querySelector('html').addEventListener('touchmove', closeMenu);
window.onscroll = closeMenu;