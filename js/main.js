const getRandomInteger = (min, max) => {
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};
// getRandomInteger(1,100);

const getRandomFloat = (min, max, digits) => {
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  const digitsDegree = 10 ** digits;
  return Math.floor((Math.random() * (max - min)) + min * digitsDegree)/digitsDegree;
};
getRandomFloat(0,100,3);

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
// const getAvatar = (index) => {
//   if (0 < index <= 9) {
//     return `img/avatars/user0${index}.png`;
//   }
//   return `img/avatars/user${index}.png`;
// };

const createOffer = (index) => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: `img/avatars/user${index}.png`,
    },
    offer: {
      title: TITLE,
      address: `${location.lng}, ${location.lat}`,
      price: getRandomInteger(1000, 30000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 4),
      guests: getRandomInteger(1, 6),
      checkin: getRandomArrayElement(CHECKINOUT),
      checkout: getRandomArrayElement(CHECKINOUT),
      description: DESCRIPTION,
      features: FEATURES.slice(getRandomInteger(0, FEATURES.length)),
      photos: PHOTOS.slice(getRandomInteger(0, FEATURES.length)),
    },
    location
  };
};

const getSimilarOffers = (count) => {
  const offers = [];
  for (let index = 1; index <= count; index ++) {
    offers.push(createOffer(index));
  }
  return offers;
};
getSimilarOffers(10);
// console.log(getSimilarOffers(10));
