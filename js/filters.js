import { renderPhotos } from './thumbnail.js';
import { debounce, shuffleArray } from './util.js';

const COUNT_OF_FILTER = 10;

let photos = [];
let filterButtons = [];

const removePhotos = () => {
  document.querySelectorAll('.pictures .picture').forEach((photo) => {
    photo.remove();
  });
};

const onFilterButtonClick = (evt) => {
  removePhotos();

  let processedPhotos;

  switch (evt.target.id) {
    case 'filter-default':
      processedPhotos = photos;
      break;
    case 'filter-random':
      processedPhotos = shuffleArray([...photos]).slice(0, COUNT_OF_FILTER);
      break;
    case 'filter-discussed':
      processedPhotos = [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }

  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });

  evt.target.classList.add('img-filters__button--active');

  renderPhotos(processedPhotos);
};

const initializeFilters = (data) => {
  photos = data;

  const imageFilters = document.querySelector('.img-filters');
  imageFilters.classList.remove('img-filters--inactive');

  filterButtons = imageFilters.querySelectorAll('.img-filters__button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', debounce(onFilterButtonClick));
  });
};

export { initializeFilters };
