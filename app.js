import fs from 'fs';
import path from 'path';

const myOtherOtherObj = {};
const myArr = [];

function logEachFile(myPath) {
    const files = fs.readdirSync(myPath);

    let tempValue = 'temp';

    for (const file in files) {
        tempValue = files;

        const myFile = fs
            .statSync(path.resolve(myPath, files[file]))
            .isDirectory();

        if (myFile) {
            console.log(files[file]);

            myOtherOtherObj[files[file]] = tempValue;

            logEachFile(path.resolve(myPath, files[file]));
        } else {
            for (const myFile of files) {
                console.log(myFile, files);

                myArr.push(files[myFile]);
            }

            myOtherOtherObj[files[file]] = tempValue;

            console.log(files[file]);
        }
    }

    // console.log(myOtherOtherObj);
    // console.log(myArr);
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
