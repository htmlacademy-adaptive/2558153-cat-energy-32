(function () {
  const nav = document.querySelector('.main-nav');
  const menuToggle = document.querySelector('.main-header__menu-toggle');

  menuToggle.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--closed')) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--opened');

      menuToggle.classList.remove('main-header__menu-toggle--opened');
      menuToggle.classList.add('main-header__menu-toggle--closed');
    } else {
      nav.classList.remove('main-nav--opened');
      nav.classList.add('main-nav--closed');

      menuToggle.classList.remove('main-header__menu-toggle--closed');
      menuToggle.classList.add('main-header__menu-toggle--opened');
    }
  });
})();/* в этот файл добавляет скрипты*/
