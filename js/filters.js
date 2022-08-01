import {renderPins} from './map.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

const CARDS_COUNT = 10;
const DEFAULT = 'any';

const PriceFilter = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const formFilter = document.querySelector('.map__filters');
const housingType = formFilter.querySelector('#housing-type');
const housingPrice = formFilter.querySelector('#housing-price');
const housingRooms = formFilter.querySelector('#housing-rooms');
const housingGuests = formFilter.querySelector('#housing-guests');

const filterType = (offer) => housingType.value === DEFAULT || offer.offer.type === housingType.value;

const filterPrice = (offer) => {
  switch (housingPrice.value) {
    case DEFAULT:
      return true;
    case 'low':
      return offer.offer.price < PriceFilter.MIDDLE;
    case 'middle':
      return (
        offer.offer.price < PriceFilter.HIGH && offer.offer.price >= PriceFilter.MIDDLE
      );
    case 'high':
      return offer.offer.price >= PriceFilter.HIGH;
  }
};
const filterRooms = (offer) => housingRooms.value === DEFAULT || +housingRooms.value === offer.offer.rooms;
const filterGuests = (offer) => housingGuests.value === DEFAULT || +housingGuests.value === offer.offer.guests;

const filterFeatures = (offer) => {
  const offerFeatures = offer.offer.features;
  const checkedFeatures = formFilter.querySelectorAll('.map__checkbox:checked');
  const filteredFeatures = [...checkedFeatures].map((feature) => feature.value);

  if (!filteredFeatures.length) {
    return true;
  }

  if (offerFeatures && offerFeatures.length) {
    return filteredFeatures.every((filteredFeature) => offerFeatures.includes(filteredFeature));
  } else {
    return false;
  }
};

const filterOffers = (offers) => {
  const filteredOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (filterType(offers[i]) &&
      filterPrice(offers[i]) &&
      filterRooms(offers[i]) &&
      filterGuests(offers[i]) &&
      filterFeatures(offers[i])) {
      filteredOffers.push(offers[i]);

      if (filteredOffers.length >= CARDS_COUNT) {
        break;
      }
    }
  }
  renderPins(filteredOffers);
};

const setFilter = (offers) => {
  formFilter.addEventListener('change', debounce(() => filterOffers(offers), RERENDER_DELAY));
};

export {CARDS_COUNT, setFilter};
