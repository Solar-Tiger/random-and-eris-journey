import { createFFXIVTalesImageGallery } from '../../components/FFXIVTales/CreateImageGallery.js';
import { createFFXIVTalesSidebar } from '../../components/FFXIVTales/FFXIVTalesAside.js';

const main = document.querySelector('main');

const ffxivTalesImageGalleryContainer = document.createElement('article');

ffxivTalesImageGalleryContainer.classList.add(
    'ffxiv-tales-image-gallery-container'
);

main.appendChild(ffxivTalesImageGalleryContainer);

ffxivTalesImageGalleryContainer.append(
    createFFXIVTalesSidebar,
    createFFXIVTalesImageGallery()
);
