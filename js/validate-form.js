import {isEscapeKey} from './util.js';
import {sendData} from './api.js';

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


const onTypeChange = () => {
  typeOfPrice.placeholder = minPrice[type.value];
  typeOfPrice.min = minPrice[type.value];
  // pristine.validate(typeOfPrice);
};

adForm.querySelector('#type').addEventListener('change', onTypeChange);

//валидация комнат и гостей

// const roomNumbers = adForm.querySelector('[name="rooms"]');
// const amountOfGuests = adForm.querySelector('[name="capacity"]');

// const roomsForGuests = {
//   1: [1],
//   2: [2,1],
//   3: [3, 2, 1],
//   100: [0],
// };

// const validateRoomsForGuests = () => {
//   roomsForGuests[+roomNumbers.value].includes(+amountOfGuests.value);
// };


// const getRoomsForGuestsErrorMessage = () => `${roomNumbers.value} ${roomNumbers.value === '1' ? 'комната' : 'комнаты'} только для ${amountOfGuests.value} ${amountOfGuests.value === '1' ? 'гостя' : 'гостей'}`;

// pristine.addValidator(roomNumbers, validateRoomsForGuests, getRoomsForGuestsErrorMessage);
// pristine.addValidator(amountOfGuests, validateRoomsForGuests, getRoomsForGuestsErrorMessage);


//валидация времени заезда и выезда

const timeIn = adForm.querySelector('[name="timein"]');
const timeOut = adForm.querySelector('[name="timeout"]');


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

//Блокировка кнопки при отправке запроса

const submitButton = adForm.querySelector('.ad-form__submit');
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

//Реализация логики проверки

const setUserFormSubmit = () => {
  pristine.addValidator(typeOfPrice, validatePriceOfTypes, getPriceOfTypesErrorMessage);

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          const body = document.querySelector('body');
          const popupSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
          const popupSuccessTemplateCloned = popupSuccessTemplate.cloneNode(true);

          // eslint-disable-next-line no-shadow
          const onPopupEscKeydown = (evt) => {
            if (isEscapeKey(evt)) {
              evt.preventDefault();
              closeSuccessPopup();
            }
          };

          const openSuccessPopup = () => {
            body.append(popupSuccessTemplateCloned);

            // eslint-disable-next-line no-shadow
            document.addEventListener('keydown', onPopupEscKeydown);
          };

          const closeSuccessPopup = () => {
            popupSuccessTemplateCloned.classList.add('hidden');

            // eslint-disable-next-line no-shadow
            document.removeEventListener('keydown',onPopupEscKeydown);
          };

          popupSuccessTemplateCloned.addEventListener('click', () => {
            closeSuccessPopup();
          });

          //показать попап, сбросить форму в начальное состояние
          openSuccessPopup();
          unblockSubmitButton();
          const clearForm = document.querySelector('.ad-form');
          clearForm.reset();
        },
        () => {
          const body = document.querySelector('body');
          const popupErrorTemplate = document.querySelector('#error').content.querySelector('.error');
          const popupErrorTemplateCloned = popupErrorTemplate.cloneNode(true);

          // eslint-disable-next-line no-shadow
          const onPopupEscKeydown = (evt) => {
            if (isEscapeKey(evt)) {
              evt.preventDefault();
              closeErrorPopup();
            }
          };

          const openErrorPopup = () => {
            body.append(popupErrorTemplateCloned);

            // eslint-disable-next-line no-shadow
            document.addEventListener('keydown', onPopupEscKeydown);
          };

          const closeErrorPopup = () => {
            popupErrorTemplateCloned.classList.add('hidden');

            // eslint-disable-next-line no-shadow
            document.removeEventListener('keydown',onPopupEscKeydown);
          };

          popupErrorTemplateCloned.addEventListener('click', () => {
            closeErrorPopup();
          });

          openErrorPopup();
          unblockSubmitButton();
          const clearForm = document.querySelector('.ad-form');
          clearForm.reset();
        },
        new FormData(evt.target),
      );
    }
  });
};


export {setUserFormSubmit};
