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

export {getRandomInteger, getRandomFloat};
