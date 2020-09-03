import './favorites.css';
import '../vendor/normalize.css';

// Импорт js-модулей
import MainApi from '../js/api/MainApi';
import NewsCard from '../js/components/NewsCard';
import CardList from '../js/components/CardList';
import Header from '../js/components/Header';

import {
  headerLight, menuButton, headerMenu, headerUserName, headerQuitButton, savedTitle, savedSubtitle,
  savedKeyword, cards,
} from '../js/constants/query-selector-favorites';
import { BASE_URL, JWT } from '../js/constants/config';
import { initialCards } from '../js/constants/cards';
import { isAuthorized } from '../js/constants/isAuthorized';
import isAccess from '../js/utils/isAccess';
import renderFavoritesInfo from '../js/utils/renderFavoritesInfo';
import logOut from '../js/utils/logOut';

const mainApi = new MainApi(BASE_URL, JWT);
const header = new Header(mainApi, headerUserName, JWT);
const card = new NewsCard(cards, isAuthorized, mainApi, initialCards, cards, renderFavoritesInfo);
const createCard = (obj) => card.createFavorites(obj);
const cardList = new CardList(cards, initialCards, createCard, mainApi);

// Выход из аккаунта и переход на главную страницу
headerQuitButton.addEventListener('click', () => {
  logOut(isAuthorized);
  document.location.href = '../index.html';
});

// Открытие мобильного меню в header
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('header__toggle-menu_active');
  headerLight.classList.toggle('header_mobile_light');
  headerMenu.classList.toggle('header-menu_mobile');
  headerMenu.classList.toggle('header-menu_mobile_light');
});

// Слушатель кнопки удаления статьи
cards.addEventListener('click', (event) => {
  card.remove(event, mainApi, savedTitle, savedSubtitle, savedKeyword);
});

// Если неавторизованный пользователь перешёл на страницу по прямой ссылке, кидаем его на главную
isAccess(isAuthorized);
// Отрисовка header при загрузке страницы
header.renderingHeaderFavorites();
// Отрисовка списка карточек
cardList.showFavorites();
// Отрисовка информации о сохранённых карточках
renderFavoritesInfo(savedTitle, savedSubtitle, savedKeyword, mainApi);
