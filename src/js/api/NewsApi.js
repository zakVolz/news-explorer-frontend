export default class NewsApi {
  constructor(baseUrl, key, dateFrom, dateTo) {
    this.baseUrl = baseUrl;
    this.key = key;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  async getNews(keyword) {
    const res = await fetch(`${this.baseUrl}q=${keyword}&apiKey=${this.key}&from=${this.dateFrom}&to=${this.dateTo}&pageSize=100`);
    if (res.ok) return res.json();
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${res.status} (${res.statusText})`);
  }
}
