import { updateFFXIVTalesContent } from './FFXIVTalesSection.js';
import randomAndEris from '../../assets/images/portrait_images/random-and-eris-tale-ffxiv.png';
import rengiaAndMira from '../../assets/images/portrait_images/rengia-and-mira-tale-ffxiv.png';
import bingeWatchingEscape from '../../assets/images/random_and_eris_gallery_images/Random and Eris 164.png';

const ourSharedAdventuresList = [
    {
        image: randomAndEris,
        altText: 'Random and Eris',
        title: 'Random and Eris Chaotic Tale in FFXIV',
        sectionID: 'our-ffxiv-tales'
    },
    {
        image: rengiaAndMira,
        altText: 'Rengia and Mira',
        title: "Rengia and Mira's Emotional Tale in FFXIV",
        sectionID: 'our-ffxiv-tales'
    },
    {
        image: bingeWatchingEscape,
        altText: 'Random and Eris watching anime',
        title: 'Our Shared Binge−Watching Escape',
        sectionID: 'our-binge-watching-escape'
    }
];

function createOurSharedAdventuresListContent() {
    const ourSharedAdventureListContainer = document.createElement('ul');

    ourSharedAdventuresList.forEach((listItem, index) => {
        const ourSharedAdventureListItem = document.createElement('li');

        const ourSharedAdventureListItemImage = document.createElement('img');

        ourSharedAdventureListItemImage.src = listItem.image;
        ourSharedAdventureListItemImage.alt = listItem.altText;

        const ourSharedAdventuresListItemHeading = document.createElement('h3');

        const ourSharedAdventuresListItemTitleLink =
            document.createElement('a');

        ourSharedAdventuresListItemTitleLink.textContent = listItem.title;
        ourSharedAdventuresListItemTitleLink.href = `#${listItem.sectionID}`;

        if (index < 2) {
            ourSharedAdventuresListItemTitleLink.addEventListener(
                'click',
                () => {
                    updateFFXIVTalesContent(index);
                }
            );
        }

        ourSharedAdventuresListItemHeading.appendChild(
            ourSharedAdventuresListItemTitleLink
        );

        ourSharedAdventureListItem.append(
            ourSharedAdventureListItemImage,
            ourSharedAdventuresListItemHeading
        );

        ourSharedAdventureListContainer.appendChild(ourSharedAdventureListItem);
    });

    return ourSharedAdventureListContainer;
}

export { createOurSharedAdventuresListContent };
