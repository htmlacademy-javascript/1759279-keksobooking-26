
const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo:'ad-form__element',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent:'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

//валидация заголовка

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(adForm.querySelector('#title'), validateTitle, 'От 30 до 100 символов');

// const validatePrice = (value) => value.max <= 100;

// pristine.addValidator(adForm.querySelector('#price'), validatePrice, 'Максимальная цена - 100 000 руб./ночь');


//цен по типу жилья

const typeOfPrice = adForm.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const type = adForm.querySelector('[name="type"]');

//УТОЧНИТЬ
const validatePriceOfTypes = (value) => value.length && parseInt(value, 10) >= minPrice[type.value];

const getPriceOfTypesErrorMessage = () => `Минимальная цена ${minPrice[type.value]} руб./ночь`;

pristine.addValidator(typeOfPrice, validatePriceOfTypes, getPriceOfTypesErrorMessage);

const onTypeChange = () => {
  typeOfPrice.placeholder = minPrice[type.value];
  pristine.validate(typeOfPrice);
};

adForm.querySelector('#type').addEventListener('change', onTypeChange);

//валидация комнат и гостей

const roomNumbers = adForm.querySelector('[name="rooms"]');
const amountOfGuests = adForm.querySelector('[name="capacity"]');

const roomsForGuests = {
  1: [1],
  2: [2,1],
  3: [3, 2, 1],
  100: [0],
};

const validateRoomsForGuests = () => {
  roomsForGuests[+roomNumbers.value].includes(+amountOfGuests.value);
};


const getRoomsForGuestsErrorMessage = () => `${roomNumbers.value} ${roomNumbers.value === '1' ? 'комната' : 'комнаты'} только для ${amountOfGuests.value} ${amountOfGuests.value === '1' ? 'гостя' : 'гостей'}`;

pristine.addValidator(roomNumbers, validateRoomsForGuests, getRoomsForGuestsErrorMessage);
// pristine.addValidator(amountOfGuests, validateRoomsForGuests, getRoomsForGuestsErrorMessage);


//валидация времени заезда и выезда

const timeIn = adForm.querySelector('[name="timein"]');
const timeOut = adForm.querySelector('[name="timeout"]');


//УТОЧНИТЬ
const validateTimeInOut = () => timeIn.value === timeOut.value;

const getTimeInOutErrorMessage = () => {
  if (timeOut.value !== timeIn.value) {
    return 'Время заезда должно быть равно времени выезда';
  }
};

pristine.addValidator(timeIn, validateTimeInOut, getTimeInOutErrorMessage);
pristine.addValidator(timeOut, validateTimeInOut, getTimeInOutErrorMessage);

const onTimeChange = () => {
  timeOut.value = timeIn.value;
  pristine.validate(timeIn);
};

adForm.querySelector('#timein').addEventListener('change', onTimeChange);

//Реализация логики проверки


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// document.querySelector('.ad-form').onchange = (e) => {
//   offer.checkin.value = e.target.value;
//   this.checkout.value = e.target.value;
// };

// const addValidate = () => {
//   adForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     const button = document.querySelector('.ad-form__submit');
//     const isValid = pristine.validate();
//     if (isValid) {
//       if (evt.keyCode === 13) {
//         this.submit();
//       }
//       button.addEventListener('click');
//     } else {
//       button.setAttribute('disabled', '');
//     }

//   });
// };

export {};
