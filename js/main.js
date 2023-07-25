import { renderPhotos } from './thumbnail.js';
import './form.js';
import { loadData } from './fetch.js';
import './messages.js';
import { initializeFilters } from './filters.js';
import './own-pictures.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPhotos(photos);
  initializeFilters(photos);
};

const onError = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '14px';
  messageAlert.style.backgroundColor = '#fa4b49';
  messageAlert.style.borderRadius = '10px';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};

loadData (onSuccess, onError);
