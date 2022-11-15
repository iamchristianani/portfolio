const btn1 = document.querySelector('#menu-btn-1');
const btn2 = document.querySelector('#menu-btn-2');
const btnBox = document.querySelector('#menu-display');
const portfolioBtn = document.querySelector('#work-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');
const menuOverlay = document.querySelector('#menu-overlay');

btn1.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});

btn2.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});

portfolioBtn.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});

aboutBtn.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});

contactBtn.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});

menuOverlay.addEventListener('click', () => {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
});