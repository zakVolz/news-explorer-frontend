export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  // Открытие Popup
  open(event) {
    if (event.target.classList.contains('header-menu__login')
      || event.target.classList.contains('popup__else_link')) {
      this.popup.classList.toggle('popup_is-opened');
    }
  }

  // Закрытие Popup
  close(event) {
    if (event.target.classList.contains('popup__close')
      || event.target.classList.contains('popup__else_link')) {
      this.popup.classList.remove('popup_is-opened');
    }
  }

  // Закрытие Popup при клике по фону
  closeClick(event) {
    if (event.target.parentNode.classList.contains('root')) {
      this.popup.classList.remove('popup_is-opened');
    }
  }

  // Закрытие Popup по нажатию клавиши ESC
  closeEsc(event) {
    if (event.keyCode === 27) {
      this.popup.classList.remove('popup_is-opened');
    }
  }
}
