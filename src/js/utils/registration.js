export default function authorized(event, api, form, errorLine, errorObj, register, sucsess) {
  event.preventDefault();
  api.signUp(
    form.elements.email.value,
    form.elements.password.value,
    form.elements.username.value,
  )
    .then(() => {
      register.close(event);
      sucsess.open(event);
    })
    .catch((err) => {
      if (err === 'Ошибка: 409 (Conflict)') {
        errorLine.textContent = errorObj.UNIQLE;
      } else {
        errorLine.textContent = 'Ошибка на сервере';
      }
    });
}
