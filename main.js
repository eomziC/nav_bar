const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',() =>{
   menu.classList.toggle('active');
   icons.classList.toggle('active');
});
$(function () {
   $('.go_top').click(function (){
      e.preventDefault();
      $('html, body').stop.animate({scrollTop:0},500);
   });
});