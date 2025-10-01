import randomAndEris from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';

const imageCardInformation = [
    { cardImage: randomAndEris, cardTitle: 'Random and Eris' },
    { cardImage: randomAndEris, cardTitle: 'Random and Eris' },
    { cardImage: randomAndEris, cardTitle: 'Random and Eris' },
    { cardImage: randomAndEris, cardTitle: 'Random and Eris' }
];

function createOurStoryReasonSection() {
    // Create Our Story section
    const ourStorySectionContainer = document.createElement('section');

    ourStorySectionContainer.classList.add('our-story-section');

    // Create and append Our Story title to Our Story Section
    const ourStoryTitle = document.createElement('h2');

    ourStoryTitle.textContent = 'Random and Eris: Finding your bestie';

    ourStorySectionContainer.appendChild(ourStoryTitle);

    // Create image card container and image cards
    const imageCardContainer = document.createElement('div');

    imageCardContainer.classList.add('image-card-container');

    imageCardInformation.forEach((imageCard) => {
        // Create Image Card figure
        const ourStoryImageCardFigure = document.createElement('figure');

        // Create image + figcaption
        const ourStoryImage = document.createElement('img');

        ourStoryImage.src = imageCard.cardImage;
        ourStoryImage.style.width = '200px';

        const ourStoryCaption = document.createElement('figcaption');

        ourStoryCaption.textContent = imageCard.cardTitle;

        ourStoryImageCardFigure.append(ourStoryImage, ourStoryCaption);

        imageCardContainer.appendChild(ourStoryImageCardFigure);
    });

    // Append image cards to Our Story Section Container
    ourStorySectionContainer.appendChild(imageCardContainer);

    return ourStorySectionContainer;
}

export { createOurStoryReasonSection };
