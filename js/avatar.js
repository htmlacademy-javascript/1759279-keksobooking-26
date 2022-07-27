const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__upload');
const avatarChooserInput = avatarChooser.querySelector('[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const photoChooser = document.querySelector('.ad-form__upload');
const photoChooserInput = photoChooser.querySelector('[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');

avatarChooserInput.addEventListener('change', () => {
  const file = avatarChooserInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

photoChooserInput.addEventListener('change', () => {
  const file = photoChooserInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
  }
});


export {};

