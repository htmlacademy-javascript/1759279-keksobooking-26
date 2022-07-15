import {generateDataOffers} from './data.js';
import {renderCards} from './create-elemetns.js';
import {getFormDisabled, getFormActive} from './form.js';
import './validate-form.js';
const dataOffers = generateDataOffers(10);
renderCards(dataOffers[0]);
getFormDisabled();
getFormActive();

