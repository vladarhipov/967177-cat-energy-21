var navMain = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.page-header__menu-button');

navMain.classList.add('page-header__main-nav_closed');
navToggle.classList.remove('visually-hidden');
navToggle.classList.add('page-header__menu-button_closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__main-nav_closed')) {
    navMain.classList.remove('page-header__main-nav_closed');
    navMain.classList.add('page-header__main-nav_opened');
    navToggle.classList.remove('page-header__menu-button_closed');
    navToggle.classList.add('page-header__menu-button_opened');
  } else {
    navMain.classList.add('page-header__main-nav_closed');
    navMain.classList.remove('page-header__main-nav_opened');
    navToggle.classList.remove('page-header__menu-button_opened');
    navToggle.classList.add('page-header__menu-button_closed');
  }
});
