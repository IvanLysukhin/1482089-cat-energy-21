let logoBox = document.querySelector('.main-nav__logo-box');
let menuButton = document.querySelector('.main-nav__button');
let menu = document.querySelector('.main-nav__list');

logoBox.classList.remove('main-nav__logo-box--no-js');
menuButton.classList.remove('main-nav__button--no-js');
menu.classList.remove('main-nav__list--no-js');

menuButton.addEventListener('click', function (evt) {
  menuButton.classList.toggle('main-nav__button--closed');
  menuButton.classList.toggle('main-nav__button--opened');
  menu.classList.toggle('main-nav__list--closed')
  menu.classList.toggle('main-nav__list--opened')
})
