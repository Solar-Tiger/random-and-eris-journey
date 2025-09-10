import { ourFFXIVTalesContent } from './FFXIVTalesSection.js';
import randomAndErisHeroImage from '../../assets/images/hero_images/random-and-eris-hugging-in-ffxiv.png';

// FUNCTION TO CREATE HERO SECTION

function createRandomAndErisHeroSection() {
    const randomAndErisHeroSection = document.createElement('section');
    const randomAndErisHeroImg = document.createElement('img');
    const randomAndErisHeroTextSection = document.createElement('section');
    const randomAndErisHeroTitle = document.createElement('h1');
    const randomAndErisHeroDescription = document.createElement('p');
    const randomAndErisHeroLink = document.createElement('a');

    // Add class to hero section
    randomAndErisHeroSection.classList.add('random-and-eris-hero');

    // Add hero image
    randomAndErisHeroImg.src = randomAndErisHeroImage;

    // Add class to text section of hero
    randomAndErisHeroTextSection.classList.add('random-and-eris-hero-text');

    // Add title to text section of hero
    randomAndErisHeroTitle.textContent = 'Random and Eris Chaotic Journey';

    // Add description text section of hero
    randomAndErisHeroDescription.textContent =
        "This website documents my best friend and I's chaotic journey of FFXIV, anime & Discord!";

    // Add link to text section of hero
    randomAndErisHeroLink.href = 'pages/ourstory.html';
    randomAndErisHeroLink.textContent = 'Start the Journey Here';

    // Append text content to Random and Eris text section of hero
    randomAndErisHeroTextSection.append(
        randomAndErisHeroTitle,
        randomAndErisHeroDescription,
        randomAndErisHeroLink
    );

    // Append every to Random and Eris hero section
    randomAndErisHeroSection.append(
        randomAndErisHeroImg,
        randomAndErisHeroTextSection
    );

    return randomAndErisHeroSection;
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

    // Button test
    const nextBtn = document.createElement('button');

    nextBtn.textContent = 'Next';
    nextBtn.classList.add('next-btn');

    // Append all elements
    ffxivTalesSection.append(
        ffxivTalesTitle,
        ffxivTalesImageContainer,
        ffxivTalesDescription,
        ffxivTalesBtnLink,
        nextBtn
    );

    return ffxivTalesSection;
}

export { createRandomAndErisHeroSection, createFFXIVTalesSection };
