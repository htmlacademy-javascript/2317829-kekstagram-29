import { isEscape } from './util.js';
import { HASHTAG_ERROR, HASHTAG_VALID, MAX_HASHTAG_COUNT } from './data.js';
import { resetScale } from './zoom-scale.js';
import { changeEffects } from './effects-slider.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOpen = document.querySelector('.img-upload__overlay');
const uploadClose = document.querySelector('.img-upload__cancel');
const uploadFile = document.querySelector('.img-upload__input');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const closeUploadForm = () => {
  resetScale();
  uploadForm.reset();
  pristine.reset();
  changeEffects();
  uploadOpen.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onUploadClose = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeUploadForm();
    document.removeEventListener('keydown', onUploadClose);
  }
};

uploadClose.addEventListener('click', closeUploadForm);

const openUpLoadForm = () => {
  uploadOpen.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadClose);
};

uploadFile.addEventListener('change', openUpLoadForm);

const onKeyPressListener = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
  }
};

textDescription.addEventListener('keydown', onKeyPressListener);
textHashtags.addEventListener('keydown', onKeyPressListener);

const isTagValid = (tag) => HASHTAG_VALID.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isTagValid);
};

pristine.addValidator(
  textHashtags,
  validateTags,
  HASHTAG_ERROR
);
const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line no-console
    console.log('Нельзя отправлять');
  }
};

uploadForm.addEventListener('submit', onFormSubmit);
