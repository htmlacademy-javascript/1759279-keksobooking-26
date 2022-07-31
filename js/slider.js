const sliderElement = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');
const typeElement = document.querySelector('#type');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  priceElement.value = value;
});

priceElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set([priceElement.value]);
});

typeElement.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: Number(priceElement.min),
      max: Number(priceElement.max),
    },
    start: Number(priceElement.min),
  });
  sliderElement.noUiSlider.set(priceElement.value);
});

export {};
