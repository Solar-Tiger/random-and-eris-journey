import { createFFXIVTalesImageGallery } from '../../components/FFXIVTales/CreateImageGallery.js';
import { createFFXIVTalesSidebar } from '../../components/FFXIVTales/FFXIVTalesAside.js';

// updateImageGallery();

const ffxivTalesSection = document.querySelector('.our-shared-adventures');

let ffxivTalesImageGalleryContainer = document.querySelector(
    '.ffxiv-tales-image-gallery-container'
);

ffxivTalesImageGalleryContainer.append(
    createFFXIVTalesSidebar,
    createFFXIVTalesImageGallery()
);
