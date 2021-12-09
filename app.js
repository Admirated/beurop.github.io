import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

new Swiper('.card__slider', {
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
   },
   grabCursor: true,
   slideToClickedSlide: true,
   // mousewheel: {
   //    sensitivity: 1,
   //    eventsTarget: '.card__slider'
   // },
   slidesPerView: 1.5,
   autoplay: {
      delay: 1000
   },
   speed: 800,
   initialSlide: 1,
   centeredSlides: true,
   breakpoints: {
      776: {
         slidesPerView: 2.5,
         initialSlide: 0,
         centeredSlides: false
      }
   },
   loop: true
});

window.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.menu__icon'),
      menu = document.querySelector('.header__navigation'),
      menuHeader = menu.querySelector('.menu__header'),
      menuClose = menu.querySelector('.menu__close'),
      menuFooter = menu.querySelector('.menu__footer');

   burger.addEventListener('click', () => {
      menu.classList.add('_active');
      menuHeader.classList.add('show');
      menuHeader.classList.remove('hide');
      menuFooter.classList.remove('hide');
   })
   menuClose.addEventListener('click', () => {
      menu.classList.remove('_active');
      menuHeader.classList.remove('show');
      menuFooter.classList.remove('show');
      setTimeout(() => {
         menuHeader.classList.add('hide');
         menuFooter.classList.add('hide');
      }, 300);
   })
})