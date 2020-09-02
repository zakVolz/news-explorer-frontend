export default function isAccess(isAuthorized) {
  if (!isAuthorized) {
    document.location.href = '../index.html';
    // eslint-disable-next-line no-alert
    alert('Необходима авторизация');
  }
}
