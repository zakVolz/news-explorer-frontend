export default class NewsCard {
  constructor(_card, isAuthorized, mainApi, initialCards, cardList,
    renderInfo, _icon, _image, _hover, _date) {
    this._card = _card;
    this.isAuthorized = isAuthorized;
    this.mainApi = mainApi;
    this.initialCards = initialCards;
    this.cardList = cardList;
    this.renderInfo = renderInfo;
    this._icon = _icon;
    this._image = _image;
    this._hover = _hover;
    this._date = _date;
  }

  // Создание экземпляра карточки index
  create(obj) {
    const template = document.createElement('div');
    template.insertAdjacentHTML(
      'beforeend',
      `
      <div class="cards__item">
      <div class="cards__hovering ${this.messageUnauthorized()}">
        <p class="cards__hovering-message">Войдите, чтобы сохранять статьи</p>
        <div class="cards__hovering-icon"></div>
      </div>
      <div class="cards__image"></div>
      <span class="cards__date">${this.convertDate(obj.publishedAt)}</span>
      <h3 class="cards__title">${obj.title}</h3>
      <p class="cards__text"></p>
      <a href="${obj.url}" target="_blank" class="cards__source">${obj.source.name}</a>
    </div>`,
    );
    this._card = template.firstElementChild;
    this.checkingFavorites(obj, this._card);
    this._card.querySelector('.cards__image').style.backgroundImage = `url('${this.imageIsNull(obj)}')`;
    this._card.querySelector('.cards__text').textContent = obj.description;
    return this._card;
  }

  // Сравнение url статей пришедших с сервера и url сохранённых статей
  checkingFavorites(obj, card) {
    if (this.isAuthorized) {
      this.mainApi.getInitialCards()
        .then((articles) => {
          articles.data.forEach((item) => {
            if (item.owner._id === localStorage._id && obj.url === item.link) {
              card.dataset.id = item._id;
              card.querySelector('.cards__hovering-icon').classList.add('cards__hovering-icon_marked');
            }
          });
        })
        .catch((err) => console.log(err));
    }
  }

  // Создание экземпляра карточки favorites
  createFavorites(obj) {
    const template = document.createElement('div');
    template.insertAdjacentHTML(
      'beforeend',
      `
      <div class="cards__item">
      <p class="cards__keyword">${obj.keyword}</p>
      <div class="cards__hovering cards__hovering_trash">
        <p class="cards__hovering-message">Убрать из сохранённых</p>
        <div class="cards__hovering-icon"></div>
      </div>
      <div class="cards__image"></div>
      <span class="cards__date">${obj.date}</span>
      <h3 class="cards__title">${obj.title}</h3>
      <p class="cards__text"></p>
      <a href="${obj.link}" target="_blank" class="cards__source">${obj.source}</a>
    </div>`,
    );
    this._card = template.firstElementChild;
    this.checkingFavorites(obj, this._card);
    this._card.querySelector('.cards__image').style.backgroundImage = `url('${obj.image}')`;
    this._card.querySelector('.cards__text').textContent = obj.text;
    this._card.dataset.id = obj._id;
    return this._card;
  }

  // Перевод даты в другой фомат
  // eslint-disable-next-line class-methods-use-this
  convertDate(date) {
    const options = { month: 'long', day: 'numeric' };
    const formated = new Date(date);
    const res = `${formated.toLocaleDateString('ru-RU', options)} ${formated.getFullYear()}`;
    return res;
  }

  // Вставка изображения если пришло null
  imageIsNull(obj) {
    if (!obj.urlToImage) {
      this._image = './src/images/no-image.jpg';
    } else {
      this._image = obj.urlToImage;
    } return this._image;
  }

  // Рендер иконки Сохраненить в избранном
  messageUnauthorized() {
    if (!this.isAuthorized) {
      this._hover = 'cards__hovering_unauthorized';
    } return this._hover;
  }

  // Сохранение и удаление карточки
  favoritesButton(event, cardItem, data) {
    if (this.isAuthorized
      && event.target.classList.contains('cards__hovering-icon')
      && !event.target.classList.contains('cards__hovering-icon_marked')) {
      this.mainApi.saveArticle(
        this.initialCards.keyword,
        data.title,
        data.text,
        data.date,
        data.source,
        data.link,
        data.image,
      )
        .then((item) => {
          cardItem.dataset.id = item.data._id;
          data.icon.classList.add('cards__hovering-icon_marked');
        })
        .catch((err) => {
          console.log(err);
          alert('Ошибка при сохранении карточки'); // eslint-disable-line no-alert
        });
    } else if (event.target.classList.contains('cards__hovering-icon_marked')) {
      this.mainApi.deleteArticle(cardItem.dataset.id)
        .then(() => {
          cardItem.dataset.id = '';
          data.icon.classList.remove('cards__hovering-icon_marked');
        })
        .catch((err) => console.log(err));
    }
  }

  // Кнопка удаления карточки
  remove(event, api, title, subtitle, keyword) {
    const placeCard = event.target.closest('.cards__item');
    if (event.target.classList.contains('cards__hovering-icon')
      // eslint-disable-next-line no-alert
      && window.confirm('Удалить данную карточку?')) {
      api.deleteArticle(placeCard.dataset.id)
        .then(() => {
          this.cardList.removeChild(placeCard);
          this.renderInfo(title, subtitle, keyword, api);
        })
        .catch((err) => {
          console.log(err);
          alert('Ошибка при удалении карточки'); // eslint-disable-line no-alert
        });
    }
  }
}
