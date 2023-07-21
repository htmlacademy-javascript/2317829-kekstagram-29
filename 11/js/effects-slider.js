import { hideElement, showElement } from './util.js';

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];
const DEFAULT_EFFECT = EFFECTS[0];

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imageEffectLevel = document.querySelector('.img-upload__effect-level');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.effects');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });
  if (isDefault()) {
    hideElement(imageEffectLevel);
  } else {
    showElement(imageEffectLevel);
  }
};

const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgUploadPreview.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();
  if (isDefault()) {
    imgUploadPreview.style.filter = DEFAULT_EFFECT.style;
  } else {
    imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  effectLevelValue.value = sliderValue;
};

const changeEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

hideElement(imageEffectLevel);

effects.addEventListener('change', onChangeEffect);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export { changeEffects };
