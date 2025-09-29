const imageCardInformation = [
    { cardImage: 'Image', cardTitle: 'Title' },
    { cardImage: 'Image', cardTitle: 'Title' },
    { cardImage: 'Image', cardTitle: 'Title' },
    { cardImage: 'Image', cardTitle: 'Title' }
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

    return ourStorySectionContainer;
}

export { createOurStoryReasonSection };
