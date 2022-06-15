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


// Генерация данных

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
const ADDRESS = LOCATION.lat + LOCATION.lng;
const PRICE = getRandomInteger(2000,50000); //случайное целое положительное число
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel']; //одно из фиксированных значений
const ROOMS = getRandomInteger(1,4); //случайное целое положительное число
const GUESTS = getRandomInteger(1,6);//случайное целое положительно число
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

const LOCATION = {
  lat: getRandomIntegerFloating[35.65000,35.70000,5], //число с плавающей точкой
  lng: getRandomIntegerFloating[139.70000,139.80000,5], //число с плавающей точкой
};

const SIMILAR_OFFER_COUNT = 10;

//Что должно быть
//массив из 3х объектов
//1й объект выдает случайный аватар - сделано
//2й объект выдает массив из 11 объектов
//3й объект выдает координаты

const getRandomArrayElement = (elements) => elements [getRandomInteger(0,elements.length - 1)];
const getRandonArrayElements = (source, maxLength) => [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);

const createOffer = () => ({
  author: getRandomArrayElement(AVATAR),
  offer:
  TITLE,
  ADDRESS,
  PRICE,
  TYPE: getRandomArrayElement(TYPE),
  ROOMS,
  GUESTS,
  CHECKIN: getRandomArrayElement(CHECKIN),
  CHECKOUT: getRandomArrayElement(CHECKOUT),
  FEATURES: getRandomArrayElements(FEATURES,FEATURES.length),

});
createOffer ();
