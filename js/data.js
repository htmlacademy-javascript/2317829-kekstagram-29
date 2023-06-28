import {randomInteger} from './util.js';

const PHOTO_COUNT = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};
const Comments = {
  MIN: 0,
  MAX: 30
};
const Avatar = {
  MIN: 1,
  MAX: 6
};
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
  const numberOfComments = randomInteger(Comments.MIN, Comments.MAX);
  for (let i = 1; i <= numberOfComments; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${randomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
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
  likes: randomInteger(Likes.MIN, Likes.MAX),
  comments: generateComments()
});

const addPhotos = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(addPhoto(i));
  }
};

export {addPhotos};
