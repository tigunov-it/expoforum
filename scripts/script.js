let burger = document.querySelector('.header__menu_mobile-icon');
let menumobile = document.querySelector('.header__menu_mobile');
let menuburger = document.querySelector('.header__menu_mobile-icon');

burger.addEventListener('click', function (){
menumobile.classList.toggle('active');
menuburger.classList.toggle('active');
})