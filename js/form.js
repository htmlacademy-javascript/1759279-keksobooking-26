const mapFilters = document.querySelector('.map__filters');
const mapFiltersFeatures = document.querySelector('.map__filter');
const bookingForm = document.querySelector('.ad-form');
const bookingFormField = document.querySelector('.ad-form__field');

const getFormDisabled = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFeatures.setAttribute('disabled', '');
  bookingForm.classList.add('ad-form--disabled');
  bookingFormField.setAttribute('disabled', '');
};

const getFormActive = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersFeatures.removeAttribute('disabled');
  bookingForm.classList.remove('ad-form--disabled');
  bookingFormField.removeAttribute('disabled');
};


export {getFormDisabled, getFormActive};
