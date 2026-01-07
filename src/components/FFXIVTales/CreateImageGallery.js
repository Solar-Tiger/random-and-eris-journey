import * as randomAndErisImages from './assets/FFXIVTalesImageExports.js';

function createFFXIVTalesImageGallery() {
    const section = document.createElement('section');

    Object.values(randomAndErisImages).forEach((randomAndErisImage) => {
        const img = document.createElement('img');

        img.src = randomAndErisImage;

        section.appendChild(img);
    });

    section.id = 'ffxiv-tales-image-gallery';
    section.classList.add('ffxiv-tales-image-gallery');

    return section;
}

export { createFFXIVTalesImageGallery };
