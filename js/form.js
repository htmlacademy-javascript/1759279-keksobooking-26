const mapFilters = document.querySelector('.map__filters');
const mapFiltersFeatures = document.querySelector('.map__filter');
const bookingForm = document.querySelector('.ad-form');
const bookingFormField = document.querySelector('.ad-form__field');

const getFormDisabled = () => {
  bookingForm.classList.add('ad-form--disabled');
  bookingFormField.setAttribute('disabled', '');
};

const getfilterDisable = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFeatures.setAttribute('disabled', '');
};

const getFormActive = () => {

  bookingForm.classList.remove('ad-form--disabled');
  bookingFormField.removeAttribute('disabled');
};

const getfilterEnable = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersFeatures.removeAttribute('disabled');
};


export {getFormDisabled, getfilterDisable, getFormActive, getfilterEnable};
