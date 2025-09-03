import randomAndErisImg1 from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';
import rengiaAndMiraImg1 from '../../assets/images/portrait_images/rengia-and-mira-tale-ffxiv.png';

// array of objects
const ourFFXIVTalesContent = [
    {
        title: 'Random and Eris',
        images: [randomAndErisImg1, randomAndErisImg1, rengiaAndMiraImg1],
        paragraph:
            "We get into all kinds of mischief on our adventure and enjoy recording the experience! Come check out all the images we've taken since October 2023!",
        linkText: 'Relive our tale',
        link: 'pages/ffxivtales.html'
    }
];

// Function to export section
export function createFFXIVTalesSection() {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const imageContainer = document.createElement('div');
    const description = document.createElement('p');
    const btnLink = document.createElement('a');

    // Create section contianing all information
    section.classList.add('our-ffxiv-tales');

    // Create title
    title.textContent = ourFFXIVTalesContent[0].title;

    // Create image container and images
    imageContainer.classList.add('image-container');

    ourFFXIVTalesContent[0].images.forEach((img) => {
        const myImage = document.createElement('img');

        myImage.src = img;

        imageContainer.appendChild(myImage);
    });

    // Create description
    description.textContent = ourFFXIVTalesContent[0].paragraph;

    // Create link
    btnLink.textContent = ourFFXIVTalesContent[0].linkText;
    btnLink.href = ourFFXIVTalesContent[0].link;

    // Append all elements
    section.append(title, imageContainer, description, btnLink);

    return section;
}
