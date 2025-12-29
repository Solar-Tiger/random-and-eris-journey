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

getAllFilesInDirectory(myObj, '04_jak_and_daxter');

function createFFXIVTalesSidebar() {
    // create aside to contain list of relevant FFXIV Tales
    const aside = document.createElement('aside');

    // create unordered list for all FFXIV Tales and append to aside
    const ffxivTalesUl = document.createElement('ul');

    aside.appendChild(ffxivTalesUl);

    return aside;
}

export { createFFXIVTalesSidebar };
