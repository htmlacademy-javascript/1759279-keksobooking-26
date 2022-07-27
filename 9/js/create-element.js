const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало;',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (offer) => {
  const cardElement = similarCardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPES[offer.offer.type];
  cardElement.querySelector('.popup__avatar').src = offer.author.avatar;

  const featureContainer = cardElement.querySelector('.popup__features');

  featureContainer.innerHTML = '';
  if (offer.offer.features) {
    offer.offer.features.forEach((feature) => {
      const featureListItem = document.createElement('li');

      featureListItem.classList.add('popup__feature');
      featureListItem.classList.add(`popup__feature--${  feature}`);
      featureContainer.append(featureListItem);
    });
  } else {
    featureContainer.remove();
  }

  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests}  гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;

  cardElement.querySelector('.popup__description').textContent = `${offer.offer.description}`;
  cardElement.querySelector('.popup__photos').textContent = `${offer.offer.photos}`;

  const photoContainer = cardElement.querySelector('.popup__photos');

  photoContainer.innerHTML = '';
  if (!offer.offer.photos || !offer.offer.photos.length) {
    photoContainer.remove();
  } else {
    offer.offer.photos.forEach((photo) => {
      const photoListItem = document.createElement('img');

      photoListItem.src = photo;
      photoListItem.width = 40;
      photoListItem.height = 45;
      photoListItem.classList.add('popup__photo');

      photoListItem.src = photo;

      photoContainer.append(photoListItem);
    });
  }

  return cardElement;
};


export {renderCard};
