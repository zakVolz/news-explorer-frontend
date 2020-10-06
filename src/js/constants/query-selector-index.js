// global const - root
const root = document.querySelector('.root');

// header-dark elements
const headerDark = root.querySelector('.header');
const menuButtonDark = headerDark.querySelector('.header__toggle-menu');
const headerMenuDark = headerDark.querySelector('.header-menu');
const headerLoginButton = headerDark.querySelector('.header-menu__login');
const headerUsername = headerDark.querySelector('.header-menu__username');
const headerQuitButton = headerDark.querySelector('.header-menu__quit');
const headerSaveArticles = headerDark.querySelector('.header-menu__articles');

// popup elements
const popupSignIn = root.querySelector('.popup_signin');
const signInForm = popupSignIn.querySelector('.popup__form');
const signInError = popupSignIn.querySelector('.popup__error_uniqle');
const signInButton = popupSignIn.querySelector('.popup__button');
const signInElseLink = popupSignIn.querySelector('.popup__else_link');

const popupSignUp = root.querySelector('.popup_signup');
const signUpForm = popupSignUp.querySelector('.popup__form');
const signUpError = popupSignUp.querySelector('.popup__error_uniqle');
const signUpButton = popupSignUp.querySelector('.popup__button');
const signUpElseLink = popupSignUp.querySelector('.popup__else_link');

const popupSucsess = root.querySelector('.popup_new-user');
const popupSucsessElseLink = popupSucsess.querySelector('.popup__else_link');

// search form elements
const searchForm = root.querySelector('.search__form');
const searchInput = searchForm.querySelector('.search__input');
const preloader = root.querySelector('.preloader');
const notFound = root.querySelector('.not-found');

// articles elements
const article = root.querySelector('.article');
const cards = article.querySelector('.cards');
const showMoreButton = article.querySelector('.article__more-button');
const hoverIcon = article.querySelector('.cards__hovering-icon');

export {
  root,
  headerDark,
  menuButtonDark,
  headerMenuDark,
  headerLoginButton,
  headerUsername,
  headerQuitButton,
  headerSaveArticles,
  popupSignIn,
  signInForm,
  signInError,
  signInButton,
  signInElseLink,
  popupSignUp,
  signUpForm,
  signUpError,
  signUpButton,
  signUpElseLink,
  popupSucsess,
  popupSucsessElseLink,
  searchForm,
  searchInput,
  preloader,
  notFound,
  article,
  cards,
  showMoreButton,
  hoverIcon,
};
