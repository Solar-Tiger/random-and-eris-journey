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

// 1.) Make sure you're passing an Object and NOT an array. Should ALWAYS be an Object

// 2.) Log directory name: "console.log(directory_name)" using Object.directory

// 3.) check if Object.children[0] is an Object or Array

function listAllItems(objs) {
    // Check if the argument is an object
    if (objs === Object(objs) && !Array.isArray(objs)) {
        // Log directory name
        console.log(objs.directory);

        // Check if Object.children is object or array
        if (objs.children[0] === Object(objs.children[0])) {
            for (let i = 0; i < objs.children.length; i++) {
                listAllItems(objs.children[i]);
            }
        }
        // else if (Array.isArray(objs.children)) {
        //     for (const file of objs.children) {
        //         console.log(file);
        //     }
        // }
    }
}

listAllItems(myObj);

function createFFXIVTalesSidebar() {
    // create aside to contain list of relevant FFXIV Tales
    const aside = document.createElement('aside');

    // create unordered list for all FFXIV Tales and append to aside
    const ffxivTalesUl = document.createElement('ul');

    aside.appendChild(ffxivTalesUl);

    return aside;
}

export { createFFXIVTalesSidebar };
