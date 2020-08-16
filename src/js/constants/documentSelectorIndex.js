/* eslint-disable no-undef */

// Глобальная переменная root
const root = document.querySelector('.root');

// header-dark elements
const headerDark = root.querySelector('.header');
const menuButtonDark = headerDark.querySelector('.header__toggle-menu');
const headerMenuDark = headerDark.querySelector('.header-menu');

// elements for open or close popup
const popupSignIn = root.querySelector('.popup_signin');
const popupSignUp = root.querySelector('.popup_signup');
const popupAfterSignUp = root.querySelector('.popup_new-user');
const headerLoginButton = headerDark.querySelector('.header-menu__login');

export {
  root,
  headerDark,
  menuButtonDark,
  headerMenuDark,
  popupSignIn,
  popupSignUp,
  popupAfterSignUp,
  headerLoginButton,
};
