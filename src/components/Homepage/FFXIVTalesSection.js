import randomAndErisImg1 from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';
import rengiaAndMiraImg1 from '../../assets/images/portrait_images/rengia-and-mira-tale-ffxiv.png';

// array of objects
const ourFFXIVTalesContent = [
    {
        title: 'Random and Eris',
        images: [randomAndErisImg1, randomAndErisImg1, randomAndErisImg1],
        paragraph:
            "We get into all kinds of mischief on our adventure and enjoy recording the experience! Come check out all the images we've taken since October 2023!",
        linkText: 'Relive our tale',
        link: 'pages/FFXIV_Tales/ffxivtales.html'
    },
    {
        title: 'Rengia and Mira',
        images: [rengiaAndMiraImg1, rengiaAndMiraImg1, rengiaAndMiraImg1],
        paragraph:
            'These two end up in Eorzea due to an unknown force and have more in common than they think, and you can experience their walk through Eorzea!',
        linkText: 'Relive their tale',
        link: 'pages/FFXIV_Tales/ffxivtales.html'
    }
];

let currentIndex = 0;

function updateFFXIVTalesContent(slideIndex) {
    const ffxivTalesTitle = document.querySelector('.our-ffxiv-tales h2');
    const ffxivTalesImageContainer = document.querySelector('.image-container');
    const ffxivTalesDescription = document.querySelector('.our-ffxiv-tales p');
    const ffxivTalesBtnLink = document.querySelector('.our-ffxiv-tales a');

    // Update currentIndex to correct Index
    currentIndex = slideIndex;

    ffxivTalesTitle.textContent = ourFFXIVTalesContent[slideIndex].title;

    ffxivTalesImageContainer.textContent = '';

    ourFFXIVTalesContent[slideIndex].images.forEach((img) => {
        const myImage = document.createElement('img');

        myImage.src = img;

        ffxivTalesImageContainer.appendChild(myImage);
    });

    ffxivTalesDescription.textContent =
        ourFFXIVTalesContent[slideIndex].paragraph;

    ffxivTalesBtnLink.textContent = ourFFXIVTalesContent[slideIndex].linkText;
    ffxivTalesBtnLink.href = ourFFXIVTalesContent[slideIndex].link;
}

function changeDisplayedContent() {
    let totalSlideLength = ourFFXIVTalesContent.length;

    return {
        nextSlide: () => {
            currentIndex = (currentIndex + 1) % totalSlideLength;

            updateFFXIVTalesContent(currentIndex);
        },

        previousSlide: () => {
            currentIndex =
                (currentIndex - 1 + totalSlideLength) % totalSlideLength;

            updateFFXIVTalesContent(currentIndex);
        }
    };
}

export {
    ourFFXIVTalesContent,
    updateFFXIVTalesContent,
    changeDisplayedContent
};
