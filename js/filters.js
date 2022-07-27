import { renderPins } from './map.js';

const CARDS_COUNT = 10;
const PriceFilter = {
  MIDDLE: 10000,
  HIGH: 50000,
};
const DEFAULT = 'any';

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

const setFilter = (offers) => {

  formFilter.addEventListener('change', () => {
    const filteredOffers = [];


    for (let i = 0; i < offers.length; i++) {
      if (filterType(offers[i]) &&
        filterPrice(offers[i]) &&
        filterRooms(offers[i]) &&
        filterGuests(offers[i])) {
        filteredOffers.push(offers[i]);

        if (filteredOffers.length >= CARDS_COUNT) {
          break;
        }
      }
    }
    renderPins(filteredOffers);
  });
};

export {setFilter};
