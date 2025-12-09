import {
    createRandomAndErisHeroSection,
    createOurFatefulEncounterSection,
    createOurSharedAdventuresSection,
    createFFXIVTalesSection,
    createOurBingeWatchingEscapeSection
} from './components/Homepage/Homepage.js';
import { changeDisplayedContent } from './components/Homepage/FFXIVTalesSection.js';

// HOMEPAGE MAIN CONTENT

const main = document.querySelector('main');

main.append(
    createRandomAndErisHeroSection(),
    createOurFatefulEncounterSection(),
    createOurSharedAdventuresSection(),
    createFFXIVTalesSection(),
    createOurBingeWatchingEscapeSection()
);

const changeContent = changeDisplayedContent();
const nextBtn = document.querySelector('.next-btn');
const previousBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click', () => {
    changeContent.nextSlide();
});

previousBtn.addEventListener('click', () => {
    changeContent.previousSlide();
});

const myObj = {
    2023: {
        casual: ['random-and-eris-1', 'random-and-eris-2', 'random-and-eris-3'],
        seasonalEvents: {
            valentioneDay: [
                'random-and-eris-valentione-day-1',
                'random-and-eris-valentione-day-2',
                'random-and-eris-valentione-day-3'
            ]
        },
        msq: {
            aRealmReborn: [],
            postARealmReborn: []
        }
    },

    2024: {
        casual: ['random-and-eris-1', 'random-and-eris-2', 'random-and-eris-3'],
        seasonalEvents: {
            valentioneDay: [
                'random-and-eris-valentione-day-1',
                'random-and-eris-valentione-day-2',
                'random-and-eris-valentione-day-3'
            ],
            starlightCelebration: []
        },
        msq: [],
        mounts: []
    }
};

function listAllItems(objs) {
    // Check if the argument is an object
    if (objs === Object(objs) && !Array.isArray(objs)) {
        // Log all keys and values of an object
        const keyItem = Object.keys(objs);
        const valueItem = Object.values(objs);

        console.log(keyItem);

        // Check if each key is an object and if so, repeat
        for (const item in valueItem) {
            // console.log(valueItem[item]);

            listAllItems(valueItem[item]);
        }

        return;
    } else if (Array.isArray(objs)) {
        // If we reach an array, just log the items
        for (const obj of objs) {
            console.log(obj);
        }
    } else {
        console.error('Not an object');
        return;
    }
}

listAllItems(myObj);
