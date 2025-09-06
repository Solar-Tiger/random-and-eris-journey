import randomAndErisImg1 from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';
import rengiaAndMiraImg1 from '../../assets/images/portrait_images/rengia-and-mira-tale-ffxiv.png';
import { createFFXIVTalesSection } from './Homepage';

// array of objects
const ourFFXIVTalesContent = [
    {
        title: 'Random and Eris',
        images: [randomAndErisImg1, randomAndErisImg1, randomAndErisImg1],
        paragraph:
            "We get into all kinds of mischief on our adventure and enjoy recording the experience! Come check out all the images we've taken since October 2023!",
        linkText: 'Relive our tale',
        link: 'pages/ffxivtales.html'
    },
    {
        title: 'Rengia and Mira',
        image: [rengiaAndMiraImg1, rengiaAndMiraImg1, rengiaAndMiraImg1],
        paragraph:
            'These two end up in Eorzea due to an unknown force and have more in common than they think, and you can experience their walk through Eorzea!',
        link: 'pages/ffxivtales.html'
    }
];

function changeDisplayedContent() {
    let currentIndex = 0;
    let slideLength = ourFFXIVTalesContent.length;

    nextSlide(currentIndex, slideLength);
    previousSlide(currentIndex, slideLength);
}

function nextSlide(slideIndex, totalSlideLength) {
    const ourFFXIVTalesSection = document.querySelector('.our-ffxiv-tales');

    ourFFXIVTalesSection.textContent = '';

    let nextSlideIndex = (slideIndex + 1) % totalSlideLength;
    createFFXIVTalesSection(nextSlideIndex);
}

function previousSlide(slideIndex, totalSlideLength) {
    const ourFFXIVTalesSection = document.querySelector('.our-ffxiv-tales');

    ourFFXIVTalesSection.textContent = '';

    let previousSlideIndex =
        (slideIndex - 1 + totalSlideLength) % totalSlideLength;
    createFFXIVTalesSection(previousSlideIndex);
}
