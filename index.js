import { phoneMask } from './assets/scripts/phone-mask.js';

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--open');
  nav.classList.toggle('nav--open');
  document.body.classList.toggle('no-scroll');
})

nav.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('nav--open')
    || e.target.parentNode.classList.contains('nav__item')
  ) {
    burgerBtn.classList.remove('burger--open');
    nav.classList.remove('nav--open');
    document.body.classList.remove('no-scroll');
  }
});

/**phone mask */
phoneMask('[data-phone]');

const phoneInputs = document.querySelectorAll('[data-phone]');

phoneInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value === '+') input.value = '';
  });
  input.addEventListener('blur', () => {
    if (input.value === '+') input.value = '';
  });
});

/**form stop submit */
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});