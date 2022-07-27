import {isEscapeKey} from './util.js';
import {sendData} from './api.js';
import {MAIN_LAT, MAIN_LNG} from './map.js';

const cardForm = document.querySelector('.ad-form');

const pristine = new Pristine(cardForm, {
  classTo:'ad-form__element',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent:'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});


const validateTitle = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(cardForm.querySelector('#title'), validateTitle, 'От 30 до 100 символов');


const priceElement = cardForm.querySelector('#price');
const typeElement = cardForm.querySelector('[name="type"]');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const validatePrice = (value) => value.length && parseInt(value, 10) >= minPrice[typeElement.value];
const getValidatePriceErrorMessage = () => `Минимальная цена ${minPrice[typeElement.value]} руб./ночь`;


const onTypeChange = () => {
  priceElement.placeholder = minPrice[typeElement.value];
  priceElement.min = minPrice[typeElement.value];
};

pristine.addValidator(priceElement, validatePrice, getValidatePriceErrorMessage);
cardForm.querySelector('#type').addEventListener('change', onTypeChange);


const roomsElement = cardForm.querySelector('[name="rooms"]');
const guestsElement = cardForm.querySelector('[name="capacity"]');

const roomsForGuests = {
  1: [1],
  2: [2,1],
  3: [3, 2, 1],
  100: [0],
};

const validateRoomsForGuests = () => roomsForGuests[+roomsElement.value].includes(+guestsElement.value);

const getRoomsForGuestsErrorMessage = () => 'Укажите верное количество комнат и/или гостей';

pristine.addValidator(roomsElement, validateRoomsForGuests, getRoomsForGuestsErrorMessage);
pristine.addValidator(guestsElement, validateRoomsForGuests, getRoomsForGuestsErrorMessage);


const timeIn = cardForm.querySelector('[name="timein"]');
const timeOut = cardForm.querySelector('[name="timeout"]');


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

cardForm.querySelector('#timein').addEventListener('change', onTimeChange);


const submitButton = cardForm.querySelector('.ad-form__submit');
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const addressInput = document.querySelector('[name="address"]');

const setUserFormSubmit = () => {

  cardForm.addEventListener('submit', (evt) => {
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
          addressInput.value = `${MAIN_LAT.toFixed(5)}, ${MAIN_LNG.toFixed(5)}`;
        },
        () => {
          const body = document.querySelector('body');
          const popupErrorTemplate = document.querySelector('#error').content.querySelector('.error');
          const popupErrorTemplateCloned = popupErrorTemplate.cloneNode(true);

          // eslint-disable-next-line no-shadow
          const onPopupEscKeydown = (evt) => {
            if (isEscapeKey(evt)) {
              evt.preventDefault();
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
        },
        new FormData(evt.target),
      );
    }
  });
};

const clearBookingForm = () => {
  const resetFormButton = document.querySelector('.ad-form__reset');
  resetFormButton.addEventListener('click', () => {
    const clearForm = document.querySelector('.ad-form');
    clearForm.reset();
    addressInput.value = `${MAIN_LAT.toFixed(5)}, ${MAIN_LNG.toFixed(5)}`;
  });
};


export {setUserFormSubmit, clearBookingForm};
