export default class MainApi {
  constructor(baseUrl, jwt) {
    this.baseUrl = baseUrl;
    this.jwt = jwt;
  }

  // eslint-disable-next-line class-methods-use-this
  _getData(res) {
    if (res.ok) return res.json();
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${res.status} (${res.statusText})`);
  }

  // Регистрация
  async signUp(email, password, name) {
    const res = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    return this._getData(res);
  }

  // Авторизация
  async signIn(email, password) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return this._getData(res);
  }

  // Получение информации о пользователе
  async getUser() {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.jwt,
      },
    });
    return this._getData(res);
  }

  // Отправка новой карточки
  async saveArticle(keyword, title, text, date, source, link, image) {
    const res = await fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.jwt,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    });
    return this._getData(res);
  }

  // Удаление карточки
  async deleteArticle(id) {
    const res = await fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.jwt,
      },
    });
    return this._getData(res);
  }

  // Получение статей
  async getInitialCards() {
    const res = await fetch(`${this.baseUrl}/articles`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.jwt,
      },
    });
    return this._getData(res);
  }
}
