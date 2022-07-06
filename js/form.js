const mapFilters = document.querySelector('.map__filters');
const adFormFiltres = document.querySelectorAll('.map__filter');
const adFormFeatures = document.querySelector('.map__filter');
const bookingForm = document.querySelector('.ad-form');
const adFormField = document.querySelector('.ad-form__field');
const adFormElement = document.querySelectorAll('.ad-form__element');

const getFormDisabled = () => {
  //Перевод фильтров в неактивное состояние
  mapFilters.classList.add('map__filters--disabled');
  adFormFeatures.setAttribute('disabled', '');
  for (let i=0; i < adFormFiltres.length; i++) {
    adFormFiltres[i].setAttribute('disabled', '');
  }
  //Перевод формы в неактивное состояние
  bookingForm.classList.add('ad-form--disabled');
  adFormField.setAttribute('disabled', '');
  for (let i=0; i < adFormElement.length; i++) {
    adFormElement[i].setAttribute('disabled', '');
  }
};

const getFormActive = () => {
  mapFilters.addEventListener('click', (evt) => {
    evt.preventDefault();
    mapFilters.classList.remove('map__filters--disabled');
  });

  adFormFeatures.addEventListener('click', (evt) => {
    evt.preventDefault();
    adFormFeatures.removeAttribute('disabled');
  });

  // adFormFiltres.addEventListener('click', (evt) => {
  //   evt.preventDefault();
  //   for (let i=0; i < adFormFiltres.length; i++) {
  //     adFormFiltres[i].removeAttribute('disabled', 'false');
  //   }
  // });

  bookingForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    bookingForm.classList.remove('ad-form--disabled');
  });

  adFormField.addEventListener('click', (evt) => {
    evt.preventDefault();
    adFormField.removeAttribute('disabled', 'false');
  });

  // adFormElement.addEventListener('click', (evt) => {
  //   evt.preventDefault();
  //   for (let i=0; i < adFormElement.length; i++) {
  //     adFormElement[i].removeAttribute('disabled', 'false');
  //   }
  // });
};


export {getFormDisabled, getFormActive};
