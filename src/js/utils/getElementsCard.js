export default function getElementsCard(obj) {
  const data = [];
  data.title = obj.querySelector('.cards__title').textContent;
  data.text = obj.querySelector('.cards__text').textContent;
  data.date = obj.querySelector('.cards__date').textContent;
  data.source = obj.querySelector('.cards__source').textContent;
  data.link = obj.querySelector('.cards__source').href;
  data.image = obj.querySelector('.cards__image').style.backgroundImage.slice(5, -2);
  data.icon = obj.querySelector('.cards__hovering-icon');

  return data;
}
