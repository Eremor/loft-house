const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--open');
  nav.classList.toggle('nav--open');
})

nav.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('nav--open')
    || e.target.parentNode.classList.contains('nav__item')
  ) {
    burgerBtn.classList.remove('burger--open');
    nav.classList.remove('nav--open');
  }
})