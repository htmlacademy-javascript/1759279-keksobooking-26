const mapFilters = document.querySelector('.map__filters');
const adFormFeatures = document.querySelector('.map__filter');
const bookingForm = document.querySelector('.ad-form');
const adFormField = document.querySelector('.ad-form__field');

const getFormDisabled = () => {
  //Перевод фильтров в неактивное состояние
  mapFilters.classList.add('map__filters--disabled');
  adFormFeatures.setAttribute('disabled', '');
  // for (let i=0; i < adFormFiltres.length; i++) {
  //   adFormFiltres[i].setAttribute('disabled', '');
  // }
  //Перевод формы в неактивное состояние
  bookingForm.classList.add('ad-form--disabled');
  adFormField.setAttribute('disabled', '');
  // for (let i=0; i < adFormElement.length; i++) {
  //   adFormElement[i].setAttribute('disabled', '');
  // }
};

const getFormActive = () => {
  mapFilters.classList.remove('map__filters--disabled');
  adFormFeatures.removeAttribute('disabled', 'false');
  bookingForm.classList.remove('ad-form--disabled');
  adFormField.removeAttribute('disabled', 'false');
};


export {getFormDisabled, getFormActive};
