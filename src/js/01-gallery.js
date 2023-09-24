import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', createMurkup(galleryItems));
function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/>
         </li>`
    )
    .join('');
}
galleryList.addEventListener('click', selectImg);
function selectImg(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
