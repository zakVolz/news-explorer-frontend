export default function saveToFavorites(event, card, getElementsCard) {
  const cardItem = event.target.closest('.cards__item');
  if (cardItem) {
    const data = getElementsCard(cardItem);
    card.favoritesButton(event, cardItem, data);
  }
}
