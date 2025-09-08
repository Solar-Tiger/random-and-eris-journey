import { ourFFXIVTalesContent } from './FFXIVTalesSection.js';

// FUNCTION TO CREATE HERO SECTION

function createRandomAndErisHeroSection() {
    const heroSection = 'My hero';
}

// FUNCTION TO CREATE FFXIV TALES SECTION

function createFFXIVTalesSection(currentIndex = 0) {
    const ffxivTalesSection = document.createElement('section');
    const ffxivTalesTitle = document.createElement('h2');
    const ffxivTalesImageContainer = document.createElement('div');
    const ffxivTalesDescription = document.createElement('p');
    const ffxivTalesBtnLink = document.createElement('a');

    // Create section contianing all information
    ffxivTalesSection.classList.add('our-ffxiv-tales');

    // Create title
    ffxivTalesTitle.textContent = ourFFXIVTalesContent[currentIndex].title;

    // Create image container and images
    ffxivTalesImageContainer.classList.add('image-container');

    ourFFXIVTalesContent[currentIndex].images.forEach((img) => {
        const myImage = document.createElement('img');

        myImage.src = img;

        ffxivTalesImageContainer.appendChild(myImage);
    });

    // Create description
    ffxivTalesDescription.textContent =
        ourFFXIVTalesContent[currentIndex].paragraph;

    // Create link
    ffxivTalesBtnLink.textContent = ourFFXIVTalesContent[currentIndex].linkText;
    ffxivTalesBtnLink.href = ourFFXIVTalesContent[currentIndex].link;

    // Append all elements
    ffxivTalesSection.append(
        ffxivTalesTitle,
        ffxivTalesImageContainer,
        ffxivTalesDescription,
        ffxivTalesBtnLink
    );

    return ffxivTalesSection;
}

export { createFFXIVTalesSection };
