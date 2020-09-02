export default class Header {
  constructor(mainApi, userName, jwt, isAuthorized, loginButton, quitButton, saveArticles) {
    this.mainApi = mainApi;
    this.userName = userName;
    this.jwt = jwt;
    this.isAuthorized = isAuthorized;
    this.loginButton = loginButton;
    this.quitButton = quitButton;
    this.saveArticles = saveArticles;
  }

  renderingHeader() {
    if (this.isAuthorized) {
      this.mainApi.getUser(this.jwt)
        .then((user) => {
          this.userName.textContent = user.name;
          this.loginButton.parentElement.classList.add('header-menu__item_type_hidden');
          this.quitButton.parentElement.classList.remove('header-menu__item_type_hidden');
          this.saveArticles.parentElement.classList.remove('header-menu__item_type_hidden');
          localStorage.setItem('_id', user._id);
          localStorage.setItem('name', user.name);
        })
        .catch((err) => console.log(err));
    } else {
      this.loginButton.parentElement.classList.remove('header-menu__item_type_hidden');
    }
  }

  renderingHeaderFavorites() {
    this.userName.textContent = localStorage.name;
  }
}
