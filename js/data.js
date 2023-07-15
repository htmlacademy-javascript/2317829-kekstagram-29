import { randomInteger } from './util.js';

const PHOTO_COUNT = 25;
const LIKES = {
  MIN: 15,
  MAX: 200
};
const COMMENTS = {
  MIN: 0,
  MAX: 30
};
const AVATAR = {
  MIN: 1,
  MAX: 6
};
const AVATAR_SIZE = {
  WIDTH: 35,
  HEIGHT: 35
};
const COMMENTS_PER_CLICK = 5;
const HASHTAG_ERROR = 'Несоблюдение правил заполнения хеш-тегов';
const HASHTAG_VALID = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;

const userName = [
  'Мария',
  'Алексей',
  'Екатерина',
  'Владимир',
  'Наталья',
  'Иван'
];
const description = [
  'Красивая природа',
  'Улочка в историческом центре',
  'Закат на море',
  'Горы в тумане',
  'Архитектурные детали',
  'Игра света и тени'
];
const listComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const photos = [];

const generateComments = () => {
  const comments = [];
  const numberOfComments = randomInteger(COMMENTS.MIN, COMMENTS.MAX);
  for (let i = 1; i <= numberOfComments; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${randomInteger(AVATAR.MIN, AVATAR.MAX)}.svg`,
      message: listComments[randomInteger(0, listComments.length - 1)],
      name: userName[randomInteger(0, userName.length - 1)]
    });
  }
  return comments;
};

const addPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: description[randomInteger(0, description.length - 1)],
  likes: randomInteger(LIKES.MIN, LIKES.MAX),
  comments: generateComments()
});

const addPhotos = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(addPhoto(i));
  }
};

addPhotos();

export { generateComments, photos, AVATAR_SIZE, COMMENTS_PER_CLICK, HASHTAG_ERROR, HASHTAG_VALID, MAX_HASHTAG_COUNT };


