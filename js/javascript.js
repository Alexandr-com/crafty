const menuBtn = document.querySelector('.menu__btn');
const menuNav = document.querySelector('.menu-nav');
const menuNavLink = document.querySelectorAll('.menu-nav__link');
const menuLeftLink = document.querySelectorAll('.menu-left__link');
const menuLeft = document.querySelector('.menu-left');

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


removeMenuLink(menuNavLink);
removeMenuLink(menuLeftLink);

function removeMenuLink(menuRemove) {
    for (let i = 0; i < menuRemove.length; i++) {
        menuRemove[i].addEventListener('click', () => {
            menuNav.classList.remove('menu-nav__activ');
            menuBtn.classList.remove('change');
            menuLeft.classList.remove('menu-left__active');
        })
    }
}


document.addEventListener('scroll', () => {
    menuNav.classList.remove('menu-nav__activ');
    menuBtn.classList.remove('change');
    menuLeft.classList.remove('menu-left__active');
})
