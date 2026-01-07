import { updateImageGallery } from './UpdateImageGallery.js';

async function getImageData() {
    const imageData = '../../data/ffxiv_tales.json';

    try {
        const response = await fetch(imageData);

        const result = await response.json();

        return result;
    } catch (error) {
        console.error(error.message);
    }
}

function listAllItems(objs) {
    // Check if the argument is an object
    if (objs === Object(objs) && !Array.isArray(objs)) {
        // Log directory name
        console.log(objs.directory);

        // Check if Object.children is object or array
        if (objs.children[0] === Object(objs.children[0])) {
            // for (let i = 0; i < objs.children.length; i++) {
            //     listAllItems(objs.children[i]);
            // }

            for (const item of objs.children) {
                listAllItems(item);
            }
        }
        // else if (Array.isArray(objs.children)) {
        //     for (const file of objs.children) {
        //         console.log(file);
        //     }
        // }
    }
}

function capitalizeFirstLetterOfEachWord(word) {
    let myCharacters = word.split('');

    let myNewCharacters = myCharacters.map((x) =>
        x === '_' || x === '-' ? ' ' : x
    );

    let notCapitalizedWords = myNewCharacters.join('');

    let stillNotCapitalizedWords = notCapitalizedWords.split(' ');

    for (let i = 0; i < stillNotCapitalizedWords.length; i++) {
        if (
            stillNotCapitalizedWords[i].toLowerCase() === 'ffxiv' ||
            stillNotCapitalizedWords[i].toLowerCase() === 'msq'
        ) {
            stillNotCapitalizedWords[i] =
                stillNotCapitalizedWords[i].toUpperCase();
        } else if (stillNotCapitalizedWords[i] !== 'and') {
            stillNotCapitalizedWords[i] =
                stillNotCapitalizedWords[i][0].toUpperCase() +
                stillNotCapitalizedWords[i].substring(1);
        } else {
            stillNotCapitalizedWords[i] === stillNotCapitalizedWords[i];
        }
    }

    return stillNotCapitalizedWords.join(' ');
}

function createSidebarList(objs) {
    // Create ul to contain everything
    const details = document.createElement('details');

    if (objs.children[0] === Object(objs.children[0])) {
        const innerUl = document.createElement('ul');
        const summary = document.createElement('summary');

        details.appendChild(summary);
        details.appendChild(innerUl);

        let capitalizeDirectoryNames = capitalizeFirstLetterOfEachWord(
            objs.directory
        );

        if (
            capitalizeDirectoryNames.toLowerCase().includes('xx23') ||
            capitalizeDirectoryNames.toLowerCase().includes('xx24') ||
            capitalizeDirectoryNames.toLowerCase().includes('xx25') ||
            capitalizeDirectoryNames.toLowerCase().includes('xx26')
        ) {
            summary.textContent = capitalizeDirectoryNames.substring(
                0,
                capitalizeDirectoryNames.length - 4
            );
        } else {
            summary.textContent = capitalizeDirectoryNames;
        }

        for (const items of objs.children) {
            if (typeof items.children[0] === 'string') {
                const lowestLi = document.createElement('li');

                let capitalizeFileNames = capitalizeFirstLetterOfEachWord(
                    items.directory
                );

                lowestLi.textContent = capitalizeFileNames.substring(
                    0,
                    capitalizeFileNames.length - 4
                );

                lowestLi.addEventListener('click', () => {
                    updateImageGallery(items.directory, objs);
                });

                innerUl.appendChild(lowestLi);
            } else {
                const innerLi = document.createElement('li');

                innerLi.appendChild(createSidebarList(items));

                innerUl.appendChild(innerLi);
            }
        }
    }

    return details;
}

async function getFFXIVTalesSidebar() {
    const fetchImageData = await getImageData();

    // create aside to contain list of relevant FFXIV Tales
    const aside = document.createElement('aside');

    aside.classList.add('ffxiv-tales-sidebar');

    // Create: details, summary (directory name), ul, li and repeat

    for (const sidebarItems in fetchImageData) {
        aside.appendChild(createSidebarList(fetchImageData[sidebarItems]));
    }

    return aside;
}

const createFFXIVTalesSidebar = await getFFXIVTalesSidebar();

export { createFFXIVTalesSidebar };
