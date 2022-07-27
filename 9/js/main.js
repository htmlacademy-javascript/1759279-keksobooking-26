import {getFormDisabled, getFormActive} from './form.js';
import {setUserFormSubmit, clearBookingForm} from './validate-form.js';
import {renderPins} from './map.js';
import './slider.js';
import {getData} from './api.js';
import './avatar.js';
import {setFilter} from './filters.js';

getFormDisabled();
getFormActive();

const SIMILAR_CARDS_COUNT = 10;


getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_CARDS_COUNT));
  setFilter(offers);
});
setUserFormSubmit();

clearBookingForm();

