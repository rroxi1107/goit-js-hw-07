import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
