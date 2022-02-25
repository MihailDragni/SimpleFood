document.addEventListener('DOMContentLoaded', () => {

  $(window).resize(function(){
  window.setTimeout('location.reload()', 200);
  });

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileBurger = document.querySelector('.mobile-burger'); //наша кнопка
  const filtersBurger = document.querySelector('.filters-burger'); //наша кнопка
  const mobileMenu = document.querySelector('.mobile-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const filterMenu = document.querySelector('.filters-menu');
  const openFilters = document.querySelector('.open-filters');

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

  openFilters.addEventListener('click', () => {
    filterMenu.classList.toggle('filters-menu--active');
    if (filterMenu.classList.contains('filters-menu--active')) { 
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
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

  filterMenu.onclick = function(event){
    let e = document.querySelector('.filters-menu__wrapper');
    if (!e.contains(event.target)) {
        filterMenu.classList.remove('filters-menu--active');
        bodyLock.classList.remove('lock');
    };
};


  mobileBurger.addEventListener('click', () => {
      mobileBurger.classList.remove('mobile-burger--active');
      mobileMenu.classList.remove('mobile-menu--active');
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
  });
  filtersBurger.addEventListener('click', () => {
      filterMenu.classList.remove('filters-menu--active');
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
  });
  
});



$(function(){

  var $range = $(".product-price__input"),
    $inputFrom = $(".product-price__from"),
    $inputTo = $(".product-price__to"),
    instance,
    min = 60,
    max = 1100,
    from = 100,
    to = 1000;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    instance.update({
        to: val
    });
});



  $('.select-style').styler();

  $('.user-nav__search').on('click', function(){
      $('.user-nav__field').toggleClass('user-nav__field--active')
      $('.user-nav__btn').toggleClass('user-nav__btn--active')
    });

  let reviewSwiper = new Swiper('.reviews-slider__container', {
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
      let restauranstSwiper = new Swiper('.best-restaurants__container', {
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

    if (window.matchMedia("(max-width: 768px)").matches) {
      let discountSwiper = new Swiper('.discounts__container', {
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

  let containerEl = document.querySelector('.popular-categories__products');
  let mixer;

  if (containerEl) mixer = mixitup(containerEl);
      

  // let mixer = mixitup('.popular-categories__products');
});

