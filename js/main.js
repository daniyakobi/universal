$(document).ready(function(){
  // Меню бургер
  $('.menu-burger').click(function(event){
    $('.menu-burger').toggleClass('active-burger');
    $('.mobile-menu').toggleClass('active-menu');
    $('body').toggleClass('lock');
  });
  $('.bookmark').click(function(event){
    var id = $(this).attr('data-book'),
      content = $('.bookmark[data-book="'+ id +'"]');
      content.toggleClass('bookmark-active');
  });
  // Табы
  $('.recommendation').click(function() {
    var id = $(this).attr('data-tab'),
      content = $('.recommended__use[data-tab="'+ id +'"]');
    $('.recommendation.active').removeClass('active');
    $(this).addClass('active');
    $('.recommended__use.tab-active').removeClass('tab-active'); 
    content.addClass('tab-active');
  });

  var mySwiper = new Swiper('.news-slider', {
    loop: true,
    speed: 1500,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullet: true,
      dynamicMainBullets: 5,
    },
    keyboard: {enabled: true,onlyInViewport: false,},
    autoplay: {
      delay: 3000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    }
  });
  $('.footer__subscribe-form').validate({errorClass: "invalid",email: {required: "We need your email address to contact you",email: "Your email address must be in the format of name@domain.com"},});
});