export default function renderFavoritesInfo(title, subtitle, keywords, api) {
  api.getInitialCards()
    .then((res) => {
      const arrAllKeywords = [];
      const filterNews = res.data.filter((item) => item.owner._id === localStorage._id);
      filterNews.forEach((value) => {
        if (typeof arrAllKeywords[value.keyword] === 'undefined') arrAllKeywords[value.keyword] = [];
        arrAllKeywords[value.keyword].push(value.keyword);
      });
      const keys = Object.keys(arrAllKeywords).map((key) => arrAllKeywords[key]);
      const result = keys.sort((a, b) => b.length - a.length);
      if (result.length > 3) {
        keywords.textContent = `${result[0][0]}, ${result[1][0]}`;
        keywords.nextElementSibling.textContent = `${result.length - 2} другим`;
      } else if (result.length === 3) {
        keywords.textContent = `${result[0][0]}, ${result[1][0]}`;
        keywords.nextElementSibling.textContent = `${result[2][0]}`;
      } else if (result.length === 2) {
        keywords.nextSibling.textContent = '';
        keywords.textContent = `${result[0][0]}, ${result[1][0]}`;
        keywords.nextElementSibling.textContent = '';
      } else if (result.length === 1) {
        keywords.textContent = `${result[0][0]}`;
        keywords.nextSibling.textContent = '';
      } else {
        subtitle.textContent = '';
      }

      if (filterNews.length !== 1) {
        title.textContent = `${localStorage.name}, у вас ${filterNews.length} сохранённых статей`;
      } else {
        title.textContent = `${localStorage.name}, у вас одна сохранённая статья`;
      }
    })
    .catch((err) => console.log(err));
}
