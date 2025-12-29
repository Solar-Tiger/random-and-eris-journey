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

function createFFXIVTalesSidebar() {
    // create aside to contain list of relevant FFXIV Tales
    const aside = document.createElement('aside');

    // create unordered list for all FFXIV Tales and append to aside
    const ffxivTalesUl = document.createElement('ul');

    aside.appendChild(ffxivTalesUl);

    return aside;
}

export { createFFXIVTalesSidebar };
