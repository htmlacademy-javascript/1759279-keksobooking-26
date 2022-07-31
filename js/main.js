import {getFormDisabled, getFormActive} from './form.js';
import {setUserFormSubmit, clearBookingForm} from './validate-form.js';
import {renderPins} from './map.js';
import './slider.js';
import {getData} from './api.js';
import './avatar.js';
import {CARDS_COUNT, setFilter} from './filters.js';

getFormDisabled();
getFormActive();

getData((offers) => {
  renderPins(offers.slice(0, CARDS_COUNT));
  setFilter(offers);
  clearBookingForm(offers);
});
setUserFormSubmit();

