document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileBurger = document.querySelector('.mobile-burger'); //наша кнопка
  const mobileMenu = document.querySelector('.mobile-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('mobile-menu--active'))  { //Проверяем, есть ли у меню активный класс
      mobileBurger.classList.add('mobile-burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      mobileBurger.classList.remove('mobile-burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  mobileMenu.onclick = function(event){
    let e = document.querySelector('.mobile-menu__wrapper');
    if (!e.contains(event.target)) {
        mobileBurger.classList.remove('mobile-burger--active');
        mobileMenu.classList.remove('mobile-menu--active');
        bodyLock.classList.remove('lock');
    };
};

  mobileBurger.addEventListener('click', () => {
      mobileBurger.classList.remove('mobile-burger--active');
      mobileMenu.classList.remove('mobile-menu--active');
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
  });
});

$(window).resize(function(){
window.setTimeout('location.reload()', 200);
});


$(function(){
  $('.user-nav__search').on('click', function(){
      $('.user-nav__field').toggleClass('user-nav__field--active')
      $('.user-nav__btn').toggleClass('user-nav__btn--active')
    });

  let swiper = new Swiper('.reviews-slider__container', {
  loop: false,
  speed: 1200,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: '.reviews-slider__next',
    prevEl: '.reviews-slider__prev',
  },
  pagination: {
    el: '.reviews-slider__pagination',
          clickable: true,
          keyboard: true,
          renderBullet: (index, className) => {
          return `<span class="${className} reviews-slider__bullet"></span>`;
          }
    }
    });

    
    if (window.matchMedia("(max-width: 768px)").matches) {
      let mySwiper = new Swiper('.best-restaurants__container', {
        slidesperview: 1,
        spaceBetween: 30,
        loop: false,
      pagination: {
      el: '.restaurants-card__pagination',
          clickable: true,
          keyboard: true,
          renderBullet: (index, className) => {
          return `<span class="${className} restaurants-card__bullet"></span>`;
          }
      }
    });
    };

    
    // else {
    //   let mySwiper = new Swiper('.popular-categories__container', {
    //   slidesPerView: '5',
    //   });
    // }

    // const swiperPrev = document.querySelector('.reviews-slider__prev')
    // const swiperNext = document.querySelector('.reviews-slider__next')

    // swiperPrev.addEventListener('click', () => {
    //   swiper.slidePrev();
    // })
    // swiperNext.addEventListener('click', () => {
    //   swiper.slideNext();
    // })

    
      

  var mixer = mixitup('.popular-categories__products');
});

