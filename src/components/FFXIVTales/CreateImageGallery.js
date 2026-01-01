const myObj = {
    directory: '04_jak_and_daxter',
    children: [
        {
            directory: 'characters',
            children: [
                {
                    directory: 'bad-guys',
                    children: [
                        'random-and-eris-casual-1',
                        'random-and-eris-casual-4'
                    ]
                },
                {
                    directory: 'good-guys',
                    children: ['jak.txt', 'keira.txt', 'torn.txt']
                }
            ]
        }
    ]
};

function fetchCloudinaryImage(publicId) {
    const cloudName = 'duaozkbsv';

    const url = `https://res.cloudinary.com/${cloudName}/image/upload/v1764957634/${publicId}.png`;

    return url;
}

// random-and-eris-casual-4.png

function getAllFilesInDirectory(directoryName, objs) {
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

            const img = document.createElement('img');

            img.src = fetchCloudinaryImage(objs.children[i]);

            console.log(img);
        }
    }
}

// getAllFilesInDirectory(myObj, 'bad-guys');

export { getAllFilesInDirectory };
