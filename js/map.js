import {getFormActive} from './form.js';
import {renderCard} from './create-element.js';

const MAIN_LAT = 35.65000;
const MAIN_LNG = 139.7000;
const SCALE = 11;
const MAX_DIGITS = 5;

const addressInput = document.querySelector('[name="address"]');

const map = L.map('map-canvas').on('load', () => {
  getFormActive();
  addressInput.value = `${MAIN_LAT.toFixed(MAX_DIGITS)}, ${MAIN_LNG.toFixed(MAX_DIGITS)}`;
}).setView({
  lat: MAIN_LAT,
  lng: MAIN_LNG,
}, SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52]
});

const mainPinmarker = L.marker(
  {
    lat: MAIN_LAT,
    lng: MAIN_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinmarker.addTo(map);

mainPinmarker.on('move', (evt) => {
  const location = evt.target.getLatLng();
  addressInput.value = `${location.lat.toFixed(MAX_DIGITS)}, ${location.lng.toFixed(MAX_DIGITS)}`;
});

const resetMainPin = () => {
  mainPinmarker.setLatLng(L.latLng(MAIN_LAT, MAIN_LNG));
};

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderPins = (pinsData) => {

  markerGroup.clearLayers();

  pinsData.forEach((offer) => {
    const standartMarker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon,
      },
    );

    standartMarker
      .addTo(markerGroup)
      .bindPopup(renderCard(offer));
  });
};

export {renderPins, MAIN_LAT, MAIN_LNG, mainPinmarker, resetMainPin};
