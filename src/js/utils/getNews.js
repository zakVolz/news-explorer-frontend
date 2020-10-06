export default function getNews(event, article, notFound, preloader, newsApi,
  searchInput, cardList, initialCards, count, showMoreButton) {
  event.preventDefault();
  article.classList.add('article_hidden');
  notFound.classList.add('not-found_hidden');
  preloader.classList.remove('preloader_hidden');
  newsApi.getNews(searchInput.value)
    .then((data) => {
      cardList.clear();
      data.articles.forEach((res) => {
        initialCards.push(res);
      });
      if (initialCards.length !== 0) {
        const line = initialCards.slice(0, count);
        cardList.render(line);
        if (line.length < 3) {
          showMoreButton.classList.add('article__more-button_hidden');
        } else {
          showMoreButton.classList.remove('article__more-button_hidden');
        }
        preloader.classList.add('preloader_hidden');
        article.classList.remove('article_hidden');
        initialCards.keyword = searchInput.value;
      } else {
        preloader.classList.add('preloader_hidden');
        notFound.classList.remove('not-found_hidden');
      }
    })
    .catch((err) => console.log(err));
}
