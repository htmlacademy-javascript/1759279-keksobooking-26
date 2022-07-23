import {getFormDisabled, getFormActive} from './form.js';
import {setUserFormSubmit} from './validate-form.js';
import {renderPins} from './map.js';
import './slider.js';
import {getData} from './api.js';

getFormDisabled();
getFormActive();

const SIMILAR_CARDS_COUNT = 10;

getData((cards) => {
  renderPins(cards.slice(0, SIMILAR_CARDS_COUNT));
});
setUserFormSubmit();
