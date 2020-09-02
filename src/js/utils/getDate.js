// Получение даты в нужном для API формате
const getDateFrom = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  let dd = date.getDate() - 7;
  if (dd < 10) { dd = `0${dd}`; }
  const res = `${yyyy}-${mm}-${dd}`;
  return res;
};

const getDateTo = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  let dd = date.getDate();
  if (dd < 10) { dd = `0${dd}`; }
  const res = `${yyyy}-${mm}-${dd}`;
  return res;
};

export { getDateFrom, getDateTo };
