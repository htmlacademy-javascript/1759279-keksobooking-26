const getRandomInteger = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};
// getRandomInteger(1,100);

const getRandomIntegerFloating = (min, max, digits) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  const digitsDegree = 10 ** digits;
  return Math.floor((Math.random() * (max - min)) + min * digitsDegree)/digitsDegree;
};
getRandomIntegerFloating(0,100,3);

const getRandomIntegerRounded = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  return Math.round(Math.random() * (((max - min)) + min)/500)*500;
};

// Генерация данных

const LOCATION = {
  lat: getRandomIntegerFloating(35.65000,35.70000,5), //число с плавающей точкой
  lng: getRandomIntegerFloating(139.70000,139.80000,5), //число с плавающей точкой
};

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLE = 'Идеальное предложение!'; //заголовок предложения
const ADDRESS = Object.values(LOCATION);

const PRICE = []; //случайное целое положительное число
for (let i = 1000; i <= 50000; i++) {
  if (i % 100) {
    PRICE.push(i);
  }
}
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel']; //одно из фиксированных значений
const ROOMS = [1, 2, 3, 4]; //случайное целое положительное число
const GUESTS = [1, 2, 3, 4, 5, 6];//случайное целое положительно число
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
]; //одно из фиксированных значений
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
]; //одно из фиксированных значений
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]; //массив случайной длины
const DESCRIPTION = 'Здесь должно быть описание помещения.';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
]; //массив случайной длины

const SIMILAR_OFFER_COUNT = 10;

const getRandomArrayElement = (elements) => elements [(getRandomInteger(0,elements.length - 1))];
// const getRandomArrayElements = (source, maxLength) => [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);
const getRandomArrayElements = ([...source], maxLength) => Array.from ({
  length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
() => source.splice(Math.random() * source.length | 0, 1) [0]
);
const createOffer = () => ({
  author: getRandomArrayElement(AVATAR),
  offer:
  TITLE,
  ADDRESS,
  PRICE: getRandomIntegerRounded(1000,PRICE.length),
  TYPE: getRandomArrayElement(TYPE),
  ROOMS: getRandomInteger(1,ROOMS.length),
  GUESTS: getRandomInteger(1,GUESTS.length),
  CHECKIN: getRandomArrayElement(CHECKIN),
  CHECKOUT: getRandomArrayElement(CHECKOUT),
  FEATURES: getRandomArrayElements(FEATURES,FEATURES.length),
  DESCRIPTION,
  PHOTOS: getRandomArrayElements(PHOTOS,PHOTOS.length),
});
createOffer ();

const similarOffers = Array.from({
  length: SIMILAR_OFFER_COUNT
}, createOffer);
similarOffers();
// console.log(similarOffers);
