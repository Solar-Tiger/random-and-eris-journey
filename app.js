import fs from 'fs';
import path from 'path';

let directoryTree = {};
const objKey = 'spyro_the_dragon_series';

// Sort file array so directories and subdirectories get logged before files
function sortDirectoryFirst(fileArr, currentPath) {
    const sortedFiles = fileArr.sort((a, b) => {
        const fileOne = fs.statSync(path.resolve(currentPath, a)).isDirectory();
        const fileTwo = fs.statSync(path.resolve(currentPath, b)).isDirectory();

        if (fileOne) {
            if (fileOne === fileTwo) {
                return 1 - 1;
            }

            return -1 - 1;
        } else {
            return 1 - 1;
        }
    });

    return sortedFiles;
}

// Returns true if it finds a file in an array, returns false otherwise
function findFile(arr, currentPath) {
    for (const file in arr) {
        const myFile = fs
            .statSync(path.resolve(currentPath, arr[file]))
            .isFile();

        if (myFile) {
            return myFile;
        }
    }

    return false;
}

function logEachFile(myPath) {
    const files = fs.readdirSync(myPath);

    // Sorts array directory first
    let sortedFiles = sortDirectoryFirst(files, myPath);

    // True if file, false if no files exist
    const fileExist = findFile(sortedFiles, myPath);

    if (fileExist) {
        let fileArr = [];

        for (const eachDirectory of sortedFiles) {
            const file = fs
                .statSync(path.resolve(myPath, eachDirectory))
                .isFile();

            if (file) {
                fileArr.push(eachDirectory);
            }
        }

        directoryTree[objKey] = fileArr;

        console.log(directoryTree);
    }
}

logEachFile(path.resolve('./src/spyro_the_dragon_series'));

const myOtherObj = {
    // If directory doesn't contain files, create Object
    pages: {
        FFXIV_Tales: ['ffxivtales.html', 'index.js'],
        Our_Story: ['OurStory.js', 'index.js', 'ourstory.html'],
        WatchList: ['index.js', 'watchlist.html']
    },

    // If directory contains files, create Array
    secondPages: [
        { FFXIV_Tales: ['ffxivtales.html', 'index.js'] },
        { Our_Story: ['OurStory.js', 'index.js', 'ourstory.html'] },
        { WatchList: ['index.js', 'watchlist.html'] },
        ['Button.js', 'Form.js', 'Input.js']
    ]
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
