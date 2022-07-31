const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFloat = (min, max, digits) => {
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  const digitsDegree = 10 ** digits;
  return (((Math.random() * (max - min)) + min * digitsDegree)/digitsDegree).toFixed(5);
};
getRandomFloat(35.65, 35.7, 5);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

  };
};

export {getRandomInteger, getRandomFloat, isEscapeKey, showAlert, debounce};
