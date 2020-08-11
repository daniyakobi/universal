$(document).ready(function(){
  // Меню бургер
  $('.menu-burger').click(function(event){
    $('.menu-burger').toggleClass('active-burger');
    $('.mobile-menu').toggleClass('active-menu');
    $('body').toggleClass('lock');
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
});