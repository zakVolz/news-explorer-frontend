// Импорт css
import './index.css';
import './vendor/normalize.css';

// Импорт js-модулей
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import Popup from './js/components/Popup';
import Form from './js/components/Form';
import NewsCard from './js/components/NewsCard';
import CardList from './js/components/CardList';
import Header from './js/components/Header';

// Импорт const
import {
  root, headerDark, menuButtonDark, headerMenuDark, headerLoginButton, headerUsername,
  headerQuitButton, headerSaveArticles, popupSignIn, signInForm, signInError, signInButton,
  signInElseLink, popupSignUp, signUpForm, signUpError, signUpButton, signUpElseLink,
  popupSucsess, popupSucsessElseLink, searchForm, searchInput, preloader, notFound, article,
  cards, showMoreButton,
} from './js/constants/query-selector-index';
import { ERROR_OBJECT } from './js/constants/error-text';
import {
  BASE_URL, BASE_API, KEY, JWT,
} from './js/constants/config';
import { initialCards, count } from './js/constants/cards';
import { getDateFrom, getDateTo } from './js/utils/getDate';
import { isAuthorized } from './js/constants/isAuthorized';
import getElementsCard from './js/utils/getElementsCard';
import registration from './js/utils/registration';
import authorized from './js/utils/authorized';
import logOut from './js/utils/logOut';
import getNews from './js/utils/getNews';
import colorHeaderMobile from './js/utils/colorHeaderMobile';
import saveToFavorites from './js/utils/saveToFavorites';

const mainApi = new MainApi(BASE_URL, JWT);
const newsApi = new NewsApi(BASE_API, KEY, getDateFrom(), getDateTo());

const login = new Popup(popupSignIn);
const register = new Popup(popupSignUp);
const sucsess = new Popup(popupSucsess);
const formSignIn = new Form(popupSignIn, signInButton, ERROR_OBJECT);
const formSignUp = new Form(popupSignUp, signUpButton, ERROR_OBJECT);
const card = new NewsCard(cards, isAuthorized, mainApi, initialCards);
const createCard = (obj) => card.create(obj);
const cardList = new CardList(cards, initialCards, createCard, mainApi, count);
const header = new Header(mainApi, headerUsername, JWT, isAuthorized,
  headerLoginButton, headerQuitButton, headerSaveArticles);

// Регистрация
signUpForm.addEventListener('submit', (event) => {
  registration(event, mainApi, signUpForm, signUpError, ERROR_OBJECT, register, sucsess);
});

// Авторизация
signInForm.addEventListener('submit', (event) => {
  authorized(event, mainApi, signInForm, signInError, ERROR_OBJECT);
});

// Выход из аккаунта
headerQuitButton.addEventListener('click', () => {
  logOut(isAuthorized);
  document.location.href = './index.html';
});

// Получение новостей
searchForm.addEventListener('submit', (event) => {
  getNews(event, article, notFound, preloader, newsApi,
    searchInput, cardList, initialCards, count, showMoreButton);
});

// Слушатель кнопки Сохранить в избранное
cards.addEventListener('click', (event) => {
  saveToFavorites(event, card, getElementsCard);
});

// Слушатель кнопки Показать ещё
showMoreButton.addEventListener('click', () => {
  cardList.showMore(showMoreButton);
});

// Открытие мобильного меню в header
menuButtonDark.addEventListener('click', () => {
  menuButtonDark.classList.toggle('header__toggle-menu_active');
  headerDark.classList.toggle('header_mobile');
  headerMenuDark.classList.toggle('header-menu_mobile');
});

// Открытие popup авторизации
headerLoginButton.addEventListener('click', () => {
  signInForm.reset();
  formSignIn.clear();
  login.open();
});

// Открытие popup регистрации, закрытие авторизации
signInElseLink.addEventListener('click', () => {
  signUpForm.reset();
  formSignUp.clear();
  login.close();
  register.open();
});

// Закрытие popup регистрации открытие авторизации
signUpElseLink.addEventListener('click', () => {
  signInForm.reset();
  formSignIn.clear();
  register.close();
  login.open();
});

// Закрытие popup успешной регистрации
popupSucsessElseLink.addEventListener('click', () => {
  signInForm.reset();
  formSignIn.clear();
  sucsess.close();
  login.open();
});

// Закрытие popup клавишей ESC
document.addEventListener('keydown', (event) => {
  login.closeClick(event);
  register.closeClick(event);
  sucsess.closeClick(event);
});

// Закрытие popup при клике по фону
root.addEventListener('mousedown', (event) => {
  sucsess.closeClick(event);
  register.closeClick(event);
  login.closeClick(event);
});

// Отслеживание скролла для изменения цвета header
document.addEventListener('scroll', () => {
  colorHeaderMobile(headerDark);
});

// Валидация форм
formSignIn.setEventListeners(popupSignIn);
formSignUp.setEventListeners(popupSignUp);

// Отрисовка header при загрузке страницы
header.renderingHeader();
