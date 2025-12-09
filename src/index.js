import {
    createRandomAndErisHeroSection,
    createOurFatefulEncounterSection,
    createOurSharedAdventuresSection,
    createFFXIVTalesSection,
    createOurBingeWatchingEscapeSection
} from './components/Homepage/Homepage.js';
import { changeDisplayedContent } from './components/Homepage/FFXIVTalesSection.js';

// HOMEPAGE MAIN CONTENT

const main = document.querySelector('main');

main.append(
    createRandomAndErisHeroSection(),
    createOurFatefulEncounterSection(),
    createOurSharedAdventuresSection(),
    createFFXIVTalesSection(),
    createOurBingeWatchingEscapeSection()
);

const changeContent = changeDisplayedContent();
const nextBtn = document.querySelector('.next-btn');
const previousBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click', () => {
    changeContent.nextSlide();
});

previousBtn.addEventListener('click', () => {
    changeContent.previousSlide();
});
