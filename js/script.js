'use strict';

let toggleMenu;
window.onload = (event) => {
  toggleMenu = false;
};


const menuIcon = document.querySelector('.nav__menu-line');
const landingPage = document.querySelector('.landing-page');
let navBackground = document.createElement('div');
navBackground.id = 'navBackground';
navBackground.className = 'background';
// let landingPageChildren = document.querySelector('.landing-page').childNodes.querySelector('*:not(.nav__menu-box)');

let menuLineWrapper = document.querySelector('.nav__menu-line');
let menuLine = document.querySelectorAll('.nav__menu:not(nav__menu--1)');

menuIcon.addEventListener('click', function() {
  landingPage.prepend(navBackground);
  menuLineWrapper.style.zIndex = 2000;
  menuLine.forEach(el => {
    el.classList.remove('nav_menu');
    el.classList.add('menu-close')
  });
  console.log(menuLine);
});
