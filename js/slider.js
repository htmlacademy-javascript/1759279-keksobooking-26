const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
// const specialElement = document.querySelector('#type');


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

// sliderElement.noUiSlider.on('update', () => {
//   valueElement.value = sliderElement.noUiSlider.get();
// });

sliderElement.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  valueElement.value = value;
});

// valueElement.addEventListener('change', () => {
//   sliderElement.handler.noUiSlider.set([null, valueElement.input.value]);
// });

export {};
