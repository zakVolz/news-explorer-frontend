// Импорт css
import './index.css';
import '../../vendor/normalize.css';

// Импорт js-модулей
import Popup from '../../js/Popup';

// Импорт const
import {
  headerDark, menuButtonDark, headerMenuDark, popupSignUp, popupSignIn,
  popupAfterSignUp, headerLoginButton,
} from '../../js/constants/documentSelectorIndex';

const login = new Popup(popupSignIn);
const register = new Popup(popupSignUp);
const afterRegister = new Popup(popupAfterSignUp);

// Открытие мобильного меню в header
menuButtonDark.addEventListener('click', () => {
  menuButtonDark.classList.toggle('header__toggle-menu_active');
  headerDark.classList.toggle('header_mobile');
  headerMenuDark.classList.toggle('header-menu_mobile');
});

// Открытие popup авторизации
headerLoginButton.addEventListener('click', (event) => {
  login.open(event);
});

// Открытие popup регистрации
popupSignIn.addEventListener('click', (event) => {
  login.close(event);
  register.open(event);
});

// Закрытие popup авторизации после регистрации
popupSignUp.addEventListener('click', (event) => {
  register.close(event);
  login.open(event);
});

// Закрытие popup успешной регистрации
popupAfterSignUp.addEventListener('click', (event) => {
  afterRegister.close(event);
  login.open(event);
});

// Закрытие popup клавишей ESC
// eslint-disable-next-line no-undef
document.addEventListener('keydown', (event) => {
  login.closeEsc(event);
  register.closeEsc(event);
  afterRegister.closeEsc(event);
});

// Закрытие popup при клике по фону
// eslint-disable-next-line no-undef
document.addEventListener('click', (event) => {
  afterRegister.closeClick(event);
  register.closeClick(event);
  login.closeClick(event);
});

// Отслеживание скролла для изменения цвета header в мобильной версии
// eslint-disable-next-line no-undef
document.addEventListener('scroll', () => {
  // eslint-disable-next-line no-undef
  if (window.scrollY >= 45) {
    return headerDark.classList.add('header_dark');
  } return headerDark.classList.remove('header_dark');
});
