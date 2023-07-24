const DEBUNCE_DELAY = 500;

export const isEscape = (evt) => evt.key === 'Escape';

export const hideElement = (element) => {
  element.classList.add('hidden');
};

export const showElement = (element) => {
  element.classList.remove('hidden');
};

export const closeModal = () => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup) {
    popup.remove();
  }
};

export const debounce = (callback, timeoutDelay = DEBUNCE_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const shuffleArray = (array) => {
  for (let indexOne = array.length - 1; indexOne > 0; indexOne--) {
    const indexTwo = Math.floor(Math.random() * (indexOne + 1));
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  }
  return array;
};

