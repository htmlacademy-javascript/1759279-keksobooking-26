import {generateDataOffers} from './data.js';

// generateDataOffers(10);

import {renderCards} from './create-elements.js';
const dataOffers = generateDataOffers(10);
renderCards(dataOffers[0]);

// console.log(getSimilarOffers(10));
