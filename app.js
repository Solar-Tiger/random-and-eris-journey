import fs from 'fs';
import path from 'path';

function logEachFile(myPath) {
    fs.readdirSync(myPath, (err, items) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(items);

        // array method for listing each item
        // for (const item of items) {
        //     fs.lstat(path.resolve(myPath, item), (err, stats) => {
        //         if (err) {
        //             console.error(err);
        //             return;
        //         }

        //         if (stats.isDirectory()) {
        //             console.log(item);

        //             logEachFile(path.resolve(myPath, item));
        //         } else {
        //             console.log(item);
        //         }
        //     });
        // }
    });
}

logEachFile(path.resolve());

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
