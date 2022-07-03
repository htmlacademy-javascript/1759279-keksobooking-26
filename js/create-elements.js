const userMap = document.querySelector('.map');
const similarAdElement = userMap.querySelector('#map-canvas');

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAdFragment = document.createDocumentFragment();


const renderCards = (offer) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  similarAdFragment.append(adElement);
  similarAdElement.append(similarAdFragment);

};

export {renderCards};


