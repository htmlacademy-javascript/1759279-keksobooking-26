import {generateDataOffers} from './data.js';

generateDataOffers(10);

import {renderCards} from './create-elements.js';
const dataOffers = generateDataOffers(10);
renderCards(dataOffers[0]);

import {getFormDisabled, getFormActive} from './form.js';

getFormDisabled();
getFormActive();
