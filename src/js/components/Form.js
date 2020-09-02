export default class Form {
  constructor(popup, button, ERROR_OBJECT) {
    this.popup = popup;
    this.button = button;
    this.ERROR_OBJECT = ERROR_OBJECT;
    this._validateForm = this._validateForm.bind(this);
  }

  // Валидатор формы
  _validateInputElement(input, error) {
    if (input.value.length === 0) {
      error.textContent = this.ERROR_OBJECT.REQUIRED;
    } else if (input.value.length < input.getAttribute('minlength')) {
      error.textContent = `Должно быть от ${input.getAttribute('minlength')} до 30 символов`;
    } else if (!input.validity.valid) {
      error.textContent = this.ERROR_OBJECT.EMAIL;
    } else { error.textContent = '\u00A0'; }
  }

  // Изменение состояния кнопки в форме
  setSubmitButtonState() {
    const inputs = Array.from(this.popup.getElementsByTagName('input'));
    let isValid = true;
    inputs.forEach((value) => {
      if (!value.validity.valid) {
        isValid = false;
      }
    });
    if (isValid) {
      this.button.removeAttribute('disabled', true);
      this.button.classList.add('button_is-enabled');
    } else {
      this.button.setAttribute('disabled', true);
      this.button.classList.remove('button_is-enabled');
    }
  }

  // Валидация
  _validateForm(event) {
    this._validateInputElement(event.target, event.target.nextElementSibling);
    this.setSubmitButtonState(event.target.parentNode.lastElementChild);
  }

  // Добавление обработчиков к валидации
  setEventListeners() {
    this.popup.addEventListener('input', this._validateForm);
  }

  // Сброс ошибок
  clear() {
    this.popup.querySelectorAll('.popup__error').forEach((item) => {
      item.textContent = '\u00A0';
    });
    this.setSubmitButtonState(this.button);
  }
}
