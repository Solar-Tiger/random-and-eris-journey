import { updateImageGallery } from '../../components/FFXIVTales/UpdateImageGallery.js';
import { createFFXIVTalesSidebar } from '../../components/FFXIVTales/FFXIVTalesAside.js';

// updateImageGallery();

const ffxivTalesSection = document.querySelector('.our-shared-adventures');

// ffxivTalesSection.appendChild(createFFXIVTalesSidebar());

let testDiv = document.querySelector('div .test');

testDiv.style.paddingLeft = '200px';

testDiv.appendChild(createFFXIVTalesSidebar());
