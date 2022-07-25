import {getFormActive} from './form.js';
import {renderCard} from './create-elemetns.js';
const addressInput = document.querySelector('[name="address"]');

const map = L.map('map-canvas').on('load', () => {
  getFormActive();
  addressInput.value = '35.65000, 139.7000';
}).setView({
  lat: 35.65000,
  lng: 139.7000,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52]
});

const mainPinmarker = L.marker(
  {
    lat: 35.65000,
    lng: 139.7000,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinmarker.addTo(map);


mainPinmarker.on('move', (evt) => {
  const location = evt.target.getLatLng();
  addressInput.value = `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderPins = (pinsData) => {

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
      .addTo(map)
      .bindPopup(renderCard(offer));
  });
};

export {renderPins};
