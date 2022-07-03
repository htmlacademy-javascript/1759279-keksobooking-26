// import {getSimilarOffers} from './data.js';

const userMap = document.querySelector('.map');
const similarAdElement = userMap.querySelector('#map-canvas');

const similarAdTemplate = document.querySelector('#card').content;
const adTemplate = similarAdTemplate.querySelector('article');

const similarAdFragment = document.createDocumentFragment();


for (let i = 0; i < 10; i++) {
  const element = adTemplate.cloneNode(true);
  element.classList.add(`popup-${  i + 1}`);
  element.children[0].textContent = `#${  i}`;
  similarAdFragment.append(element);
}

similarAdElement.append(similarAdFragment);

export {};

// const similarOffers = getSimilarOffers();

// similarAds.forEach(({title, address, price}) => {
//   const adElement = similarAdTemplate.cloneNode(true);
//   adElement.querySelector('.popup__title').textContent = title;
//   adElement.querySelector('.popup__text--address').textContent = address;
//   adElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь` ;

//   similarAdFragment.appendChild(adElement);
// });


// similarAdElement.appendChild(similarAdFragment);

// const makeElement = (tagName, className, text) => {
//   const element = document.createElement(tagName);
//   element.classList.add(className);
//   if (text) {
//     element.textContent = text;
//   }
//   return element;
// };

// const createAd = (ad) => {
//   const similarAds = makeElement('li', 'ad');

//   const title = makeElement('h3', 'popup__title', ad.title);
//   similarAds.classList.add(title);

//   similarAds.appendChild(title);
//   return similarAds;
// };

// const getSimilarAds = (ads) => {
//   const similarAdElement = userMap.querySelector('#map-canvas');

//   const adItem = createAd(ads[0]);
//   similarAdElement.appendChild(adItem);
// };


// getSimilarAds (similarOffers);

// export {getSimilarAds};


