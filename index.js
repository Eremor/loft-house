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
})