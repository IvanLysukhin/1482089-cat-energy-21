let logoBox = document.querySelector('.main-nav__logo-box');
let menuButton = document.querySelector('.main-nav__button');
let menu = document.querySelector('.main-nav__list');


logoBox.classList.remove('main-nav__logo-box--no-js');
menuButton.classList.remove('main-nav__button--no-js');
menu.classList.remove('main-nav__list--no-js');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuButton.classList.toggle('main-nav__button--closed');
  menuButton.classList.toggle('main-nav__button--opened');
  menu.classList.toggle('main-nav__list--closed');
  menu.classList.toggle('main-nav__list--opened');
  console.log('Клик по кнопке');
})


let beforeButton = document.querySelector('.slider__button--before');
let afterButton = document.querySelector('.slider__button--after');
let fatCat = document.querySelector('.slider__pic--before');
let skinnyCat = document.querySelector('.slider__pic--after');
let sliderCat = document.querySelector('.slider__pic--without-js');
let sliderBar = document.querySelector('.slider__bar');

fatCat.classList.remove('slider__pic--no-js');
skinnyCat.classList.remove('slider__pic--no-js');
sliderCat.classList.remove('slider__pic--without-js');
sliderCat.classList.add('slider__pic--off');

beforeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  fatCat.classList.add('slider__pic--on');
  fatCat.classList.remove('slider__pic--off');
  skinnyCat.classList.remove('slider__pic--on');
  skinnyCat.classList.add('slider__pic--off');
  sliderBar.classList.remove('slider__bar--right');
})

afterButton.addEventListener('click', function (evt) {
  fatCat.classList.add('slider__pic--off');
  fatCat.classList.remove('slider__pic--on');
  skinnyCat.classList.remove('slider__pic--off');
  skinnyCat.classList.add('slider__pic--on');
  sliderBar.classList.add('slider__bar--right');
})
