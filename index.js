import { phoneMask } from './assets/scripts/phone-mask.js';
import { createLightbox } from './assets/scripts/lightbox.js';

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

/**lightbox */
const videoPlayBtn = document.querySelector('[data-youtube-lightbox]');

function onYouTubeIframeAPIReady() {
  createLightbox(videoPlayBtn);
}

onYouTubeIframeAPIReady();

/**Yandex map */
const mapItem = document.querySelector('.map__item');

// const markerElement = document.createElement('div');
// markerElement.classList.add('map__pin');
const markerElement = document.querySelector('.map__pin');
const balloon = document.querySelector('.map__balloon');

let map;

renderMap();
async function renderMap() {
  await ymaps3.ready;

  map = new ymaps3.YMap(mapItem, {
    location: {
      center: [30.338928, 59.943543],
      zoom: 16,
    }
  });

  const marker = new ymaps3.YMapMarker({
    coordinates: [30.338928, 59.943543],
    blockEvents: true
    
  }, markerElement);

  markerElement.addEventListener('mouseenter', () => balloon.style.display = 'flex');
  markerElement.addEventListener('mouseleave', () => balloon.style.display = 'none');

  map.addChild(new ymaps3.YMapDefaultFeaturesLayer());
  map.addChild(marker);

  map.addChild(new ymaps3.YMapDefaultSchemeLayer());
}