import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryOfImages = document.querySelector(".gallery");

function createImagesMarkup(items) {
    return items.map((item) =>
        `<div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                <img class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"/>
                </a>
        </div>`
    ).join("");
}

const imagesMarkup = createImagesMarkup(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

galleryOfImages.addEventListener("click", onImgClick);

function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create
        (`<img src="${evt.target.dataset.source}" width="800" height="600">`);
    instance.show();

    galleryOfImages.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}