import { isEscape, closeModal } from './util.js';
import { closeUploadForm } from './form.js';
import { uploadData } from './fetch.js';

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const formUpload = document.querySelector('.img-upload__form');

const onEscKeydown = (evt) => {
  if (isEscape(evt)) {
    closeModal();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const onPopupClick = (evt) => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup && !evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    evt.preventDefault();
    closeModal();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const messageFragment = errorMessage.cloneNode(true);
  const errorButton = messageFragment.querySelector('.error__button');

  showMessage(messageFragment);

  errorButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    closeModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      messageFragment.remove();

      document.querySelector('.img-upload__overlay').classList.remove('hidden');

      document.removeEventListener('keydown', onEscKeydown);
    }
  });
};

const showSuccessMessage = () => {
  const messageFragment = successMessage.cloneNode(true);
  const successButton = messageFragment.querySelector('.success__button');

  showMessage(messageFragment);

  successButton.addEventListener('click', () => {
    closeUploadForm();
    closeModal();
  });
};

const onSuccess = () => {
  closeUploadForm();
  showSuccessMessage();
};

const onError = () => {
  showErrorMessage();
};

const openUploadSubmit = (evt) => {
  evt.preventDefault();

  const submitButton = document.querySelector('.img-upload__submit');
  submitButton.setAttribute('disabled', 'disabled');

  uploadData(() => {
    onSuccess();
    submitButton.removeAttribute('disabled');
  }, () => {
    onError();
    submitButton.removeAttribute('disabled');
  }, 'POST', new FormData(evt.target));
};

formUpload.addEventListener('submit', openUploadSubmit);
