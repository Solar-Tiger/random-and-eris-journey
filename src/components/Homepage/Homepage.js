import { createOurSharedAdventuresListContent } from './OurSharedAdventuresSection.js';
import { ourFFXIVTalesContent } from './FFXIVTalesSection.js';
import randomAndErisHeroImage from '../../assets/images/hero_images/random-and-eris-hugging-in-ffxiv.png';
import ourFatefulEncounterMobile from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter-mobile.png';
import ourFatefulEncounterTablet from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter-tablet.png';
import ourFatefulEncounterDesktop from '../../assets/images/banner/banner-random-and-eris-our-fateful-encounter.png';
import ourBingeWatchingEscapeMobile from '../../assets/images/banner/banner-watchlist-mobile.jpg';
import ourBingeWatchingEscapeDesktop from '../../assets/images/banner/banner-watchlist.jpg';

// FUNCTION TO CREATE HERO SECTION

function createRandomAndErisHeroSection() {
    const randomAndErisHeroSection = document.createElement('section');
    const randomAndErisHeroImg = document.createElement('img');

    // Add class to hero section
    randomAndErisHeroSection.classList.add('random-and-eris-hero');

    // Add hero image
    randomAndErisHeroImg.src = randomAndErisHeroImage;

    const randomAndErisHeroTextSection = document.createElement('section');
    const randomAndErisHeroTitle = document.createElement('h1');
    const randomAndErisHeroDescription = document.createElement('p');
    const randomAndErisHeroLink = document.createElement('a');

    // Add class to text section of hero
    randomAndErisHeroTextSection.classList.add('random-and-eris-hero-text');

    // Add title to text section of hero
    randomAndErisHeroTitle.textContent = 'Random and Eris Chaotic Journey';

    // Add description text section of hero
    randomAndErisHeroDescription.textContent =
        "This website documents my best friend and I's chaotic journey of FFXIV, anime & Discord!";

    // Add link to text section of hero
    randomAndErisHeroLink.href = 'pages/Our_Story/ourstory.html';
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

// FUNCTION TO CREATE OUR FATEFUL ENCOUNTER SECTION

function createOurFatefulEncounterSection() {
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

// FUNCTION TO CREATE OUR SHARED ADVENTURES

function createOurSharedAdventuresSection() {
    // Create section container Our Shared Adventures content
    const ourSharedAdventuresSection = document.createElement('section');

    ourSharedAdventuresSection.classList.add('our-shared-adventures');

    // Create section containing Our Shared Adventures content
    const ourSharedAdventuresTitle = document.createElement('h2');

    ourSharedAdventuresTitle.textContent = 'Our Shared Adventures';

    // Append Our Shared Adventures list content
    ourSharedAdventuresSection.append(
        ourSharedAdventuresTitle,
        createOurSharedAdventuresListContent()
    );

    return ourSharedAdventuresSection;
}

// FUNCTION TO CREATE FFXIV TALES SECTION

function createFFXIVTalesSection(currentIndex = 0) {
    const ffxivTalesSection = document.createElement('section');
    const ffxivTalesTitle = document.createElement('h2');
    const ffxivTalesImageContainer = document.createElement('div');
    const ffxivTalesDescription = document.createElement('p');
    const ffxivTalesBtnLink = document.createElement('a');

    // Create section contianing FFXIV Tales content
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

function createOurBingeWatchingEscapeSection() {
    // Create Our Binge Watching Escape section and add class
    const ourBingeWatchingEscapeSection = document.createElement('section');

    ourBingeWatchingEscapeSection.classList.add('our-binge-watching-escape');

    // Create Our Binge Watching Escape background image using picture element
    const ourBingeWatchingEscapePicture = document.createElement('picture');
    const ourBingeWatchingEscapePictureMobile =
        document.createElement('source');
    const ourBingeWatchingEscapePictureDesktop = document.createElement('img');

    ourBingeWatchingEscapePictureMobile.srcset = ourBingeWatchingEscapeMobile;
    ourBingeWatchingEscapePictureMobile.media = '(max-width: 47.938em)';

    ourBingeWatchingEscapePictureDesktop.src = ourBingeWatchingEscapeDesktop;

    ourBingeWatchingEscapePicture.append(
        ourBingeWatchingEscapePictureMobile,
        ourBingeWatchingEscapePictureDesktop
    );

    // Create Our Binge Watching Escape card and append title, description and link
    const ourBingeWatchingEscapeCard = document.createElement('article');

    ourBingeWatchingEscapeCard.classList.add('our-binge-watching-escape-card');

    const ourBingeWatchingEscapeTitle = document.createElement('h2');
    const ourBingeWatchingEscapeDescription = document.createElement('p');
    const ourBingeWatchingEscapeBtnLink = document.createElement('a');

    ourBingeWatchingEscapeTitle.textContent = 'Our Binge Watching Escape';
    ourBingeWatchingEscapeDescription.textContent =
        "Outside of FFXIV, we've taken to watching things together from anime to movies as a way to escape from reality.";
    ourBingeWatchingEscapeBtnLink.textContent = 'Come Escape With Us';
    ourBingeWatchingEscapeBtnLink.href = 'pages/watchlist.html';

    ourBingeWatchingEscapeCard.append(
        ourBingeWatchingEscapeTitle,
        ourBingeWatchingEscapeDescription,
        ourBingeWatchingEscapeBtnLink
    );

    ourBingeWatchingEscapeSection.append(
        ourBingeWatchingEscapePicture,
        ourBingeWatchingEscapeCard
    );

    return ourBingeWatchingEscapeSection;
}

export {
    createRandomAndErisHeroSection,
    createOurFatefulEncounterSection,
    createOurSharedAdventuresSection,
    createFFXIVTalesSection,
    createOurBingeWatchingEscapeSection
};
