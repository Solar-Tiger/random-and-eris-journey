import fs from 'fs';
import path from 'path';

const directoryTree = {};

function logEachFile(myPath) {
    const files = fs.readdirSync(myPath);

    const sortedFiles = files.sort((a, b) => {
        const fileOne = fs.statSync(path.resolve(myPath, a)).isDirectory();
        const fileTwo = fs.statSync(path.resolve(myPath, b)).isDirectory();

        if (fileOne) {
            if (fileOne === fileTwo) {
                return 1 - 1;
            }

            return -1 - 1;
        } else {
            return 1 - 1;
        }
    });

    for (const file in sortedFiles) {
        const myFile = fs
            .statSync(path.resolve(myPath, sortedFiles[file]))
            .isDirectory();

        if (myFile) {
            console.log(sortedFiles[file]);

            directoryTree[sortedFiles[file]] = {};

            logEachFile(path.resolve(myPath, sortedFiles[file]));
        } else {
            console.log(sortedFiles[file]);
        }
    }

    console.log(directoryTree);
}

logEachFile(path.resolve('./src/pages'));

const myOtherObj = {
    pages: {
        FFXIV_Tales: ['ffxivtales.html', 'index.js'],
        Our_Story: ['OurStory.js', 'index.js', 'ourstory.html'],
        WatchList: ['index.js', 'watchlist.html']
    }
};

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

        // Check if each key is an object and if so, repeat
        for (const item in valueItem) {
            // console.log(valueItem[item]);
            console.log(keyItem[item]);

            listAllItems(valueItem[item]);
        }
    } else if (Array.isArray(objs)) {
        // If we reach an array, just log the items
        for (const obj of objs) {
            console.log(obj);
        }
    } else {
        console.error('Not an object');
    }
}

// listAllItems(myObj);
