$(document).ready(function(){
  $('.menu-burger').click(function(event){
    $('.menu-burger').toggleClass('active-burger');
    $('.mobile-menu').toggleClass('active-menu');
    $('body').toggleClass('lock');
  });
});