import './favorites.css';
import '../../vendor/normalize.css';

import { headerLight, menuButtonLight, headerMenuLight } from '../../js/constants/documentSelectorFavorites';

// Открытие мобильного меню в header
menuButtonLight.addEventListener('click', () => {
  menuButtonLight.classList.toggle('header__toggle-menu_active');
  headerLight.classList.toggle('header_mobile_light');
  headerMenuLight.classList.toggle('header-menu_mobile');
  headerMenuLight.classList.toggle('header-menu_mobile_light');
});
