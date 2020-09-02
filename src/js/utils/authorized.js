export default function authorized(event, api, form, errorLine, errorObj) {
  event.preventDefault();
  api.signIn(
    form.elements.email.value,
    form.elements.password.value,
  )
    .then((res) => {
      localStorage.setItem('jwt', `Bearer ${res.jwt}`);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch((err) => {
      if (err === 'Ошибка: 401 (Unauthorized)'
        || err === 'Ошибка: 400 (Bad Request)') {
        errorLine.textContent = errorObj.INVALID_DATA;
      } else {
        errorLine.textContent = 'Ошибка на сервере';
      }
    });
}
