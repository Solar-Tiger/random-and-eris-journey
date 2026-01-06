import { updateImageGallery } from '../../components/FFXIVTales/UpdateImageGallery.js';
import { createFFXIVTalesSidebar } from '../../components/FFXIVTales/FFXIVTalesAside.js';

// updateImageGallery();

const ffxivTalesSection = document.querySelector('.our-shared-adventures');

// ffxivTalesSection.appendChild(createFFXIVTalesSidebar());

let main = document.querySelector('main');

main.appendChild(createFFXIVTalesSidebar());
