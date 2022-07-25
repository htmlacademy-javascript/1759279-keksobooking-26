import {getRandomInteger, getRandomFloat} from './util.js';

// Генерация данных

const TITLE = 'Идеальное предложение!';
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'];
const CHECKINOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = 'Здесь должно быть описание помещения.';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => elements [(getRandomInteger(0,elements.length - 1))];
const getAvatar = () => {
  const number = getRandomInteger(1,11);
  return number > 0&& number < 10 ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`;
};


const createOffer = () => {
  const location = {
    lat: getRandomFloat(35.65, 35.7, 0),
    lng: getRandomFloat(139.7, 139.8, 0),
  };
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: TITLE,
      address: `${location.lng}, ${location.lat}`,
      price: getRandomInteger(1000, 100000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 3),
      guests: getRandomInteger(1, 3),
      checkin: getRandomArrayElement(CHECKINOUT),
      checkout: getRandomArrayElement(CHECKINOUT),
      description: DESCRIPTION,
      features: FEATURES.slice(getRandomInteger(0, FEATURES.length)),
      photos: PHOTOS.slice(getRandomInteger(0, FEATURES.length)),
    },
    location
  };
};

const generateDataOffers = (count) => {
  const offers = [];
  for (let index = 1; index <= count; index ++) {
    offers.push(createOffer(index));
  }
  return offers;
};
generateDataOffers(10);
// console.log(getSimilarOffers(10));

export {generateDataOffers};
