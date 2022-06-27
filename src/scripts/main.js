'use strict';

const form = document.querySelector('.form');
const pageElement = document.querySelector('.page');
const menuMobOpenBtn = document.querySelector('.nav__menu-opened');
const menuMob = document.querySelector('.header__wrapper-nav-mob');
const menuMobCloceBtn = document.querySelector('.nav-mob__btn-close');
const navList = document.querySelector('.nav-mob__list');
const backCloseElement = document.querySelector('.header__background-nav-mob');
// const headerElement = document.querySelector('.header');
// const mainElement = document.querySelector('.main');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

function handlerOpenMenu() {
  menuMob.classList.add('nav-mob__open');
  pageElement.classList.add('page--scroll-none');
}

function handlerCloceMenu() {
  menuMob.classList.remove('nav-mob__open');
  pageElement.classList.remove('page--scroll-none');
}

function handlerNavList(event) {
  const { tagName } = event.target;

  if (tagName === 'A') {
    menuMob.classList.remove('nav-mob__open');
    pageElement.classList.remove('page--scroll-none');
  }
}
menuMobOpenBtn.addEventListener('click', handlerOpenMenu);
menuMobCloceBtn.addEventListener('click', handlerCloceMenu);
navList.addEventListener('click', handlerNavList);
backCloseElement.addEventListener('click', handlerCloceMenu);
