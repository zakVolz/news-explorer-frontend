/* eslint-disable no-restricted-globals */
export default function logOut() {
  // eslint-disable-next-line no-alert
  if (confirm('Вы действительно хотите выйти?')) {
    localStorage.removeItem('jwt');
  }
}
