const isAuthorized = localStorage.jwt && localStorage.jwt.startsWith('Bearer ');

// eslint-disable-next-line import/prefer-default-export
export { isAuthorized };
