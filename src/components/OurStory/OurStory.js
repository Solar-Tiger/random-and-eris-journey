import randomAndEris from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';
import ourFatefulEncounterMobile from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter-mobile.png';
import ourFatefulEncounterTablet from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter-tablet.png';
import ourFatefulEncounterDesktop from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter.png';

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

function createOurStoryExampleSection() {
    // Create Our Story Example section
    const ourStoryExampleSection = document.createElement('section');

    ourStoryExampleSection.classList.add('our-story-example-section');

    // Create Our Story Example title
    const ourStoryExampleTitle = document.createElement('h2');

    ourStoryExampleTitle.textContent = 'Life with your bestie';

    // Append Our Story Example title to Our Story Example section
    ourStoryExampleSection.appendChild(ourStoryExampleTitle);

    // Create example image container and paragraph
    for (let i = 0; i < 3; i++) {
        // Create container for each Our Story Example article
        const ourStoryExampleArticle = document.createElement('article');

        // Create Our Story Example image container and containing images
        const ourStoryExampleImageContainer = document.createElement('div');

        for (let j = 0; j < 4; j++) {
            const ourStoryExampleImage = document.createElement('img');

            ourStoryExampleImage.src = randomAndEris;
            ourStoryExampleImage.style.width = '100px';

            ourStoryExampleImageContainer.appendChild(ourStoryExampleImage);
        }

        // Create Our Story Example paragraph
        const ourStoryExampleParagraph = document.createElement('p');

        ourStoryExampleParagraph.textContent =
            'We first met through our old Free Company. I don’t know what it was that caused me to sit down next to her that day, but it’s a choice I’d make every time again and again. At first, we often joked that each other were too cool to hangout with the other one. But as we hung out more in game, we learned we had more in common than we’ve ever found with anyone in our lives.';

        ourStoryExampleArticle.appendChild(
            ourStoryExampleImageContainer,
            ourStoryExampleParagraph
        );

        ourStoryExampleSection.appendChild(ourStoryExampleArticle);
    }

    return ourStoryExampleSection;
}

function createOurFatefulEncounterEndingSection() {
    // Create Our Fateful Encounter Section and add Class
    const ourFatefulEncounterSection = document.createElement('section');

    ourFatefulEncounterSection.classList.add('our-fateful-encounter');

    // Create Picture element and add sources
    const ourFatefulEncounterBackgroundImage =
        document.createElement('picture');
    const ourFatefulEncounterPictureMobile = document.createElement('source');
    const ourFatefulEncounterPictureTablet = document.createElement('source');
    const ourFatefulEncounterDefaultDesktop = document.createElement('img');

    ourFatefulEncounterPictureMobile.srcset = ourFatefulEncounterMobile;
    ourFatefulEncounterPictureMobile.media = '(max-width: 37.938em)';

    ourFatefulEncounterPictureTablet.srcset = ourFatefulEncounterTablet;
    ourFatefulEncounterPictureTablet.media = '(max-width: 63.938em)';

    ourFatefulEncounterDefaultDesktop.src = ourFatefulEncounterDesktop;
    ourFatefulEncounterDefaultDesktop.alt =
        'Random and Eris sitting on the Island Santuary mount looking at each other under the night sky';

    ourFatefulEncounterBackgroundImage.append(
        ourFatefulEncounterPictureMobile,
        ourFatefulEncounterPictureTablet,
        ourFatefulEncounterDefaultDesktop
    );

    // Create Our Fateful Encounter card and append card information
    const ourFatefulEncounterCard = document.createElement('article');
    const ourFatefulEncounterTitle = document.createElement('h2');
    const ourFatefulEncounterDescription = document.createElement('p');
    const ourFatefulEncounterQuoteWrap = document.createElement('em');

    ourFatefulEncounterCard.classList.add('our-fateful-encounter-card');

    ourFatefulEncounterTitle.textContent = 'Our Fateful Encounter';
    ourFatefulEncounterDescription.textContent =
        'Everything changed when I sat down next to her...';
    ourFatefulEncounterQuoteWrap.textContent =
        'When she was on the verge of quitting FFXIV and I had just disconnected from my old BFF, in an old FC I was in, I chose to sit down next to her as she sat alone in a corner. That descision changed both our lives.';

    // Appened <br> and quote to <p>
    ourFatefulEncounterDescription.appendChild(document.createElement('br'));
    ourFatefulEncounterDescription.appendChild(ourFatefulEncounterQuoteWrap);

    // Append title and description to card
    ourFatefulEncounterCard.append(
        ourFatefulEncounterTitle,
        ourFatefulEncounterDescription
    );

    // Append Picture and Card to Our Fateful Encounter Section
    ourFatefulEncounterSection.append(
        ourFatefulEncounterBackgroundImage,
        ourFatefulEncounterCard
    );

    return ourFatefulEncounterSection;
}

export {
    createOurStoryReasonSection,
    createOurStoryExampleSection,
    createOurFatefulEncounterEndingSection
};
