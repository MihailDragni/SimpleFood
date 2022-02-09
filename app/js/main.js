$(function(){

  $('.user-nav__search').on('click', function(){
      $('.user-nav__field').toggleClass('user-nav__field--active')
      $('.menu').toggleClass('menu--active')
    });

  const swiper = new Swiper('.customer-reviews__container', {
  loop: false,
  speed: 1200,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
    el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
    },
  });

  var mixer = mixitup('.popular-categories__products');
});


