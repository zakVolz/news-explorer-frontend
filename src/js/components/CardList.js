export default class CardList {
  constructor(container, array, newsCard, mainApi, count) {
    this.container = container;
    this.array = array;
    this.newsCard = newsCard;
    this.mainApi = mainApi;
    this.count = count;
  }

  // Добавление карточек
  addCard(obj) {
    this.container.appendChild(this.newsCard(obj));
  }

  // Рендер готовых карточек
  render(articles) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of articles) {
      this.addCard(item);
    }
  }

  // Кнопка Показать ещё
  showMore(button) {
    const result = this.array.slice(this.count, this.count += 3);
    if (result.length < 3) {
      this.render(result);
      button.classList.add('article__more-button_hidden');
    } else {
      this.render(result);
    }
  }

  // Отчистка секции новостей для повторного поиска
  clear() {
    if (this.array.length !== 0) {
      this.array.length = 0;
      this.count = 3;
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
    }
  }

  showFavorites() {
    this.mainApi.getInitialCards()
      .then((obj) => {
        obj.data.forEach((res) => {
          if (res.owner._id === localStorage._id) {
            this.array.push(res);
          }
        });
        this.render(this.array);
      })
      .catch((err) => console.log(err));
  }
}
