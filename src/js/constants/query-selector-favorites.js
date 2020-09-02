// Глобальная переменная root
const root = document.querySelector('.root');

// header-ligth elements
const headerLight = root.querySelector('.header');
const menuButton = headerLight.querySelector('.header__toggle-menu');
const headerMenu = headerLight.querySelector('.header-menu');
const headerUserName = headerLight.querySelector('.header-menu__username');
const headerQuitButton = headerLight.querySelector('.header-menu__quit');

// saved elements
const savedTitle = root.querySelector('.saved__title');
const savedSubtitle = root.querySelector('.saved__subtitle');
const savedKeyword = root.querySelector('.saved__keyword');

// cards elements
const cards = root.querySelector('.cards');

export {
  headerLight,
  menuButton,
  headerMenu,
  headerUserName,
  headerQuitButton,
  savedTitle,
  savedSubtitle,
  savedKeyword,
  cards,
};
