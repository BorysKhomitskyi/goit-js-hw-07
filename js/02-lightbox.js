import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryOfImages = document.querySelector(".gallery");

function createImagesMarkup(items) {
    return items.map((item) =>
        `<a class="gallery__link" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"/>
            </a>`
    ).join("");
}

const imagesMarkup = createImagesMarkup(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});