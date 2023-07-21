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

