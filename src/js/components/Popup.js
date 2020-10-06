export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  // Открытие Popup
  open() {
    this.popup.classList.add('popup_is-opened');
  }

  // Открытие Popup по клику
  openClick(event) {
    if (event.target.classList.contains('header-menu__login')
      || event.target.classList.contains('popup__else_link')) {
      this.popup.classList.toggle('popup_is-opened');
    }
  }

  // Закрытие Popup
  close() {
    this.popup.classList.remove('popup_is-opened');
  }

  // Закрытие Popup по клику на крестик/на фоне/на клавишу ESC
  closeClick(event) {
    if (event.target.classList.contains('popup__close')
      || event.target.parentNode.classList.contains('root')
      || event.keyCode === 27) {
      this.popup.classList.remove('popup_is-opened');
    }
  }
}
