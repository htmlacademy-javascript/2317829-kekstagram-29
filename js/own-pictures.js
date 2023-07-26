const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadFile = document.querySelector('#upload-file');
const ownImageUploadPreview = document.querySelector('.img-upload__preview img');
const effectList = document.querySelector('.effects__list');
const smallImages = effectList.querySelectorAll('span');

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    ownImageUploadPreview.src = url;
    smallImages.forEach((img) => {
      img.style.backgroundImage = `url(${url})`;
    });
  }
});
