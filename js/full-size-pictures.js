import { AVATAR_SIZE } from './data.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImage = bigPhoto.querySelector('.big-picture__img img');
const likesCount = bigPhoto.querySelector('.likes-count');
const commentsCount = bigPhoto.querySelector('.comments-count');
const photoCaption = bigPhoto.querySelector('.social__caption');
const commentList = bigPhoto.querySelector('.social__comments');
const bigPhotoCloseButton = bigPhoto.querySelector('.big-picture__cancel');

const showBigPhoto = (photo) => {
  const { url, likes, comments, description } = photo;
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const closeBigPhoto = () => {
    bigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onBigPhotoEscKeyDown);
    bigPhotoCloseButton.removeEventListener('click', onBigPhotoCloseButtonClick);
  };

  bigPhotoImage.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  photoCaption.textContent = description;

  commentList.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentAvatar.width = AVATAR_SIZE.WIDTH;
    commentAvatar.height = AVATAR_SIZE.HEIGHT;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentElement.appendChild(commentAvatar);
    commentElement.appendChild(commentText);
    commentList.appendChild(commentElement);
  });

  function onBigPhotoEscKeyDown(evt) {
    if (evt.key === 'Escape') {
      closeBigPhoto();
    }
  }

  function onBigPhotoCloseButtonClick() {
    closeBigPhoto();
  }

  document.addEventListener('keydown', onBigPhotoEscKeyDown);
  bigPhotoCloseButton.addEventListener('click', onBigPhotoCloseButtonClick);
};

export { showBigPhoto };
