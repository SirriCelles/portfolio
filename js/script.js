'use strict';

let toggleMenu;
window.onload = (event) => {
  toggleMenu = false;
};


const menuIcon = document.querySelector('.nav__menu-line');
let landingPage = document.querySelector('.landing-page');
let navBackground = document.createElement('div');
navBackground.id = 'navBackground';
navBackground.className = 'background';

let landing = document.querySelector('.landing');
// let landingPageChildren = document.querySelector('.landing-page').childNodes.querySelector('*:not(.nav__menu-box)');

let menuLineWrapper = document.querySelector('.nav__menu-line');
let menuLine = document.querySelectorAll('.nav__menu:not(nav__menu--1)');

let menuBox = document.querySelector('.nav__menu-box');
let menuItem = document.querySelector('.nav__menu-item');
let menuLinks = document.querySelectorAll('.nav__menu-link');
let navLogo = document.querySelector('.nav__logo');

// close icon
let menuCloseIcon = document.getElementById('menuCloseIcon');

menuIcon.addEventListener('click', function() {
  landingPage.prepend(navBackground);
  menuCloseIcon.style.display = 'inline-block';
  landing.classList.add('filtertext');
  navLogo.classList.add('filtertext');
  menuLineWrapper.style.display = 'none';



  menuBox.style.display = 'flex';
  menuBox.classList.add('nav__menu-mobile');

  menuLinks.forEach(menuLink => {
    menuLink.classList.remove('nav__menu-link');
    menuLink.classList.add('nav__menu-mobile-item');
  })

  // menuItemAtag.forEach(element => {
  //   element.classList.add('nav__menu-mobile-item');
  // });
  // menuLineWrapper.style.zIndex = 2000;
  // menuLine.forEach(el => {
  //   el.classList.remove('nav_menu');
  //   el.classList.add('menu-close')
  // });


});
