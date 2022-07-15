const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало;',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const userMap = document.querySelector('.map');
const similarAdElement = userMap.querySelector('#map-canvas');

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAdFragment = document.createDocumentFragment();


const renderCards = (offer) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.offer.title;

  adElement.querySelector('.popup__title').textContent = offer.offer.title ? adElement.querySelector('.popup__title').textContent = offer.offer.title : adElement.querySelector('.popup__title').remove();

  adElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = TYPES[offer.offer.type];
  adElement.querySelector('.popup__avatar').src = offer.author.avatar;

  const featureContainer = adElement.querySelector('.popup__features');

  featureContainer.innerHTML = '';
  offer.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');

    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add(`popup__feature--${  feature}`);
    featureContainer.append(featureListItem);
  });

  adElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests}  гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;

  adElement.querySelector('.popup__description').textContent = `${offer.offer.description}`;
  adElement.querySelector('.popup__photos').textContent = `${offer.offer.photos}`;

  const photoContainer = adElement.querySelector('.popup__photos');

  photoContainer.innerHTML = '';
  if (!offer.offer.photos.length) {
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


  similarAdFragment.append(adElement);
  similarAdElement.append(similarAdFragment);


};


export {renderCards};
