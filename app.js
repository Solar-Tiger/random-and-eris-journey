import fs from 'fs';
import path from 'path';

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

// function logEachFile(myPath) {
//     const files = fs.readdirSync(myPath);

//     // Create base file name
//     let baseFileName = path.basename(myPath);

//     // Create an array to store final result
//     let myArr = [];

//     // Sorts array directory first
//     let sortedFiles = sortDirectoryFirst(files, myPath);

//     for (const items of sortedFiles) {
//         if (fs.statSync(path.resolve(myPath, items)).isDirectory()) {
//             // console.log(`Directory name: ${items}`);

//             const subBox = logEachFile(path.resolve(myPath, items));

//             myArr.push(items, subBox);
//         } else {
//             // console.log(`File name: ${items}`);

//             myArr.push(items);
//         }
//     }

//     return myArr;
// }

// console.log(
//     JSON.stringify(
//         logEachFile(path.resolve('./src/04_jak_and_daxter')),
//         null,
//         2
//     )
// );

function createJSONObject(myPath) {
    // Sorts array directory first
    let sortedFiles = sortDirectoryFirst(fs.readdirSync(myPath), myPath);

    // Create base file name
    let baseFileName = path.basename(myPath);

    // Create an array and object to store final results
    let myDirectory = {};
    let myFiles = [];

    for (const items of sortedFiles) {
        if (fs.statSync(path.join(myPath, items)).isDirectory()) {
            const subBox = createJSONObject(path.join(myPath, items));

            myFiles.push(subBox);
        } else {
            myFiles.push(items);
        }
    }

    if (sortedFiles.length >= 0) {
        myDirectory['directory'] = baseFileName;

        myDirectory['children'] = myFiles;
    }

    return myDirectory;
}

// console.log(
//     JSON.stringify(
//         createJSONObject(path.resolve('./src/04_jak_and_daxter')),
//         null,
//         2
//     )
// );

// fs.writeFileSync(
//     './src/05_temp/test.json',
//     JSON.stringify(
//         createJSONObject(path.resolve('./src/04_jak_and_daxter')),
//         null,
//         2
//     )
// );

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
    directory: '04_jak_and_daxter',
    children: [
        {
            directory: 'characters',
            children: [
                {
                    directory: 'bad-guys',
                    children: ['kor.txt', 'krew.txt']
                },
                {
                    directory: 'good-guys',
                    children: ['jak.txt', 'keira.txt', 'torn.txt']
                }
            ]
        },
        'jak-and-daxter-notes.txt'
    ]
};

function getAllFilesInDirectory(objs, directoryName) {
    // Check if the directory name equals the directory you're looking for AND it's an Object
    if (directoryName !== objs.directory && objs === Object(objs)) {
        for (let i = 0; i < objs.children.length; i++) {
            getAllFilesInDirectory(objs.children[i], directoryName);
        }
    }

    // Make sure it's an Object else do nothing with it
    else if (objs === Object(objs)) {
        for (let i = 0; i < objs.children.length; i++) {
            console.log(objs.children[i]);
        }
    }
}

// getAllFilesInDirectory(myObj, 'characters');

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

// INEFFICIENT FACTORIAL STORING OF multipliedNumber!
function factorial(num, numContainer = [], originalNum = num) {
    if (num === 1) {
        return num;
    } else {
        let multipliedNumber =
            num * factorial(num - 1, numContainer, originalNum);

        numContainer.push(multipliedNumber);

        if (num === originalNum) {
            return numContainer;
        } else {
            return multipliedNumber;
        }
    }
}

// console.log(factorial(5));

function factorialTwo(num) {
    let myArr = [];

    if (num === 1) {
        return num;
    }

    let multipliedNumber = num * factorialTwo(num - 1);

    myArr.push(multipliedNumber);

    return multipliedNumber;
}

// console.log(factorialTwo(4));

function fact(num) {
    let myArr = [];

    function doTheFact(num) {
        if (num === 1) {
            myArr.push(num);

            return num;
        }

        let multipliedNumber = num * doTheFact(num - 1);

        myArr.push(multipliedNumber);

        return multipliedNumber;
    }

    doTheFact(num);

    return myArr;
}

// console.log(fact(4));

function hasDuplicateValue(array) {
    var existingNumbers = [];

    for (var i = 0; i < array.length; i++) {
        // 1.) Check if the item at the "Index" position of existingNumbers exist at existingNumbers[array[i]]

        // 2.) At this point, it's accessing existingNumbers Index, which is the first element in "array" that would be accessed at array[i]

        // 3.) array[i] evaluates to array[0] and the element there currently is "1"

        // 4.) This means we now access existingNumbers[1], which is undefined, so we place a "1" there

        // 5.) If we access existingNumbers[1] again, that means we've found a duplicate

        if (existingNumbers[array[i]] === undefined) {
            existingNumbers[array[i]] = 1;
        } else {
            return true;
        }
    }

    return false;
}

// console.log(hasDuplicateValue([1, 2, 3, 10]));

function twoNums() {
    let numOne = 7;
    let numTwo = 10;

    let multiplier = 5000;

    console.log(7 * multiplier);
    console.log(10 * multiplier);
}

// twoNums();

var set = {};

// Let’s add a few values to the set:
set['apple'] = 1;
set['banana'] = 1;
set['cucumber'] = 1;

// console.log(set);

set['banana'] = 1;

// console.log(set);

// Same as above function, hasDuplicateValue, but works with strings as well thanks to the Object {} in place of an Array []
function hasDuplicateValueAny(array) {
    var existingValues = {};
    for (var i = 0; i < array.length; i++) {
        if (existingValues[array[i]] === undefined) {
            console.log(existingValues);

            existingValues[array[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

let numAndStringArr = [1, 2, 'cat', 3, 4, 'dog', 5, 1];

// console.log(hasDuplicateValueAny(numAndStringArr));

function blah(num) {
    console.log(num++);

    if (num <= 9001) {
        blah(num);
    } else {
        return;
    }
}

// blah(1);

function countdown(num) {
    if (typeof num !== 'number' || isNaN(num)) return;

    while (num !== 0) {
        console.log(num);

        num--;
    }

    console.log(num);
}

// countdownTwo(10);

function countdownTwo(number) {
    console.log(number);
    countdownTwo(number - 1);
}

// countdownTwo(10);

function fetchCloudinaryImage(publicId) {
    const cloudName = 'duaozkbsv';

    const url = `https://res.cloudinary.com/${cloudName}/image/upload/v1764957634/${publicId}.png`;

    return url;
}

console.log(fetchCloudinaryImage('random-and-eris-casual-1'));
console.log(fetchCloudinaryImage('random-and-eris-casual-4'));

// random-and-eris-casual-4.png
