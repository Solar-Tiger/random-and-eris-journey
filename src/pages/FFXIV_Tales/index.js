import { createFFXIVTalesImageGallery } from '../../components/FFXIVTales/CreateImageGallery.js';
import { updateImageGallery } from '../../components/FFXIVTales/UpdateImageGallery.js';
import { createFFXIVTalesSidebar } from '../../components/FFXIVTales/FFXIVTalesAside.js';

// updateImageGallery();

const ffxivTalesSection = document.querySelector('.our-shared-adventures');

// ffxivTalesSection.appendChild(createFFXIVTalesSidebar());

let ffxivTalesImageGalleryContainer = document.querySelector(
    '.ffxiv-tales-image-gallery-container'
);

ffxivTalesImageGalleryContainer.append(
    createFFXIVTalesSidebar(),
    createFFXIVTalesImageGallery()
);
