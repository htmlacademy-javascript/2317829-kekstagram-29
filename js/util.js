const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEscape = (evt) => evt.key === 'Escape';

export { randomInteger, isEscape };
