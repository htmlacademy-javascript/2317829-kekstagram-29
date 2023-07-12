import { showBigPhoto } from './full-size-pictures.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');

const renderPhoto = ({ url, comments, likes, description }) => {
  const photoElement = template.cloneNode(true);
  const pictureImage = photoElement.querySelector('.picture__img');
  const pictureComments = photoElement.querySelector('.picture__comments');
  const pictureLikes = photoElement.querySelector('.picture__likes');

  pictureImage.src = url;
  pictureImage.alt = description;
  pictureComments.textContent = comments.length;
  pictureLikes.textContent = likes;

  const onElementClick = (evt) => {
    evt.preventDefault();
    showBigPhoto({ url, comments, likes, description });
  };

  photoElement.addEventListener('click', onElementClick);
  return photoElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const element = renderPhoto(photo);
    fragment.appendChild(element);
  });
  picturesContainer.appendChild(fragment);
};

export { renderPhotos };
