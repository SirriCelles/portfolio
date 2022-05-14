'use strict';

let toggleMenu;
window.onload = (event) => {
  toggleMenu = false;
  if(localStorage.getItem('formData')) {
    const data = localStorage.getItem('formData');
    const jsonData =  JSON.parse(data);
    email.value = jsonData.email;
    form.elements['name'].value = jsonData.name;
    form.elements['message'].value = jsonData.message;
  };
};


const menuIcon = document.querySelector('.nav__menu-line');
let landingPage = document.querySelector('.landing-page');
let navBackground = document.createElement('div');
navBackground.id = 'navBackground';
navBackground.className = 'background';

let landing = document.querySelector('.landing');

let menuLineWrapper = document.querySelector('.nav__menu-line');
let menuLine = document.querySelectorAll('.nav__menu:not(nav__menu--1)');

let menuBox = document.querySelector('.nav__menu-box');
let menuItem = document.querySelector('.nav__menu-item');
let menuLinks = document.querySelectorAll('.nav__menu-link');
let navLogo = document.querySelector('.nav__logo');

// close icon
let menuCloseIcon = document.getElementById('menuCloseIcon');

menuIcon.addEventListener('click', function() {
  if(!toggleMenu) {
    onOpenMenu();
    toggleMenu = true;
  }
});

menuCloseIcon.addEventListener('click', function() {
  if(toggleMenu) {
    onCloseMenu();
    toggleMenu = false;
  }
});

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', function() {
    if(toggleMenu) {
      onCloseMenu();
      toggleMenu = false;
    }
  });
});

// open menu
let onOpenMenu = function() {
  landingPage.prepend(navBackground);
  menuCloseIcon.style.display = 'block';
  landing.classList.add('filtertext');
  navLogo.classList.add('filtertext');
  menuLineWrapper.style.display = 'none';

  menuBox.style.display = 'flex';
  menuBox.classList.remove('nav__menu-box');
  menuBox.classList.add('nav__menu-mobile');

  menuLinks.forEach(menuLink => {
    menuLink.classList.remove('nav__menu-link');
    menuLink.classList.add('nav__menu-mobile-item');
  });
}

let onCloseMenu = function() {
  landingPage.removeChild(navBackground);
  menuCloseIcon.style.display = 'none';
  landing.classList.remove('filtertext');
  navLogo.classList.remove('filtertext');
  menuLineWrapper.style.display = 'block';
  menuBox.style.display = 'none';
  menuBox.classList.remove('nav__menu-mobile');
  menuBox.classList.add('nav__menu-box');
  menuLinks.forEach(menuLink => {
    menuLink.classList.remove('nav__menu-mobile-item');
    menuLink.classList.add('nav__menu-link');
  });
}

// Form Validation
let form = document.querySelector('.contact__form');
let formBtn = document.querySelector("button[type='name']");
let email = form.elements['email'];
let submitStatus = document.querySelector('#submit-status');
const invalidEmail = "Please enter a valid email address."

// Preserve form data

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const loweremailVal = (email.value).toLowerCase();
  if(email.value !== loweremailVal) {
    displayError(submitStatus, invalidEmail);
    return;
  }
  else {
    if (storageAvialabilty('localStorage')) {
      let formData = {
        email: email.value,
        name: form.elements['name'].value,
        message: form.elements['message'].value
      };

      if (localStorage.getItem('formData')) {
        localStorage.removeItem('formData');
      }
      localStorage.setItem('formData', JSON.stringify(formData));
    }else {
      console.log('Sorry!, Unable to use browser storage');
    }
    form.submit();
  }
});

function showMessage(selector, message, type) {
	selector.innerText = message;
	selector.className = type ? "valid" : "invalid";
	return type;
}

function displayError(input, message) {
	return showMessage(input, message, false);
}


// testing for avialabilty
function storageAvialabilty(type) {
  var storage;
  try{
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}


