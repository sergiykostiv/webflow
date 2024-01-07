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

// Бургер
const burger = document.querySelector('.nav__burger-box');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('nav__burger-box--active'),
  menu.classList.toggle('menu__burger-visible');
});

// Акордеон
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

// Дропдаун 
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

// const animItems = document.querySelectorAll('.anim-items');

// if (animItems.lenght > 0) {
//   window.addEventListener('scroll', animOnScroll)
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;

//       if (animItemPoint > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('.active');
//         console.log('active')
//       } else {
//         animItem.classList.remove('.active');
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }
// }
