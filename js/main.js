new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {
      270: {
        slidesPerView: 1,
        spaceBetween: 10
      },

      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },

    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
});

const burger = document.querySelector('.nav__burger-box');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('nav__burger-box--active'),
  menu.classList.toggle('menu__burger-visible');
});

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.accordion__control');
          const content = self.querySelector('.accordion__content');

          self.classList.toggle('open');

          if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
      });
  });
});
