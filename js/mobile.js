let menu_h = document.querySelector('.header__menu-mob');
let menu_hIcon = document.querySelector('.header__menu-mob img');
let header__menu = document.querySelector('.header__menu-el');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let navigate = document.querySelector('.navigate');

menu_h.addEventListener('click', () => {
    header__menu.classList.toggle('open-menu')
    swiperWrapper.classList.toggle('back-slider')
    navigate.classList.toggle('back-slider')
})