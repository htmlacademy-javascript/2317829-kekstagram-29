import { SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './data.js';

const uploadScale = document.querySelector('.img-upload__scale');
const uploadPreview = document.querySelector('.img-upload__preview');
const scaleControlSmaller = uploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = uploadScale.querySelector('.scale__control--value');

const scaleImage = (value) => {
  uploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onScaleControlSmaller = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onscaleControlBigger = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
scaleControlBigger.addEventListener('click', onscaleControlBigger);

export { resetScale };
