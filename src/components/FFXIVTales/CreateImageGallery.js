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
        {
            directory: 'worlds',
            children: [{ directory: 'areas', children: ['haven-city.txt'] }]
        }
    ]
};

function createImageGallery(objs) {
    // Create ul to contain everything
    const details = document.createElement('details');

    if (objs.children[0] === Object(objs.children[0])) {
        const innerUl = document.createElement('ul');
        const summary = document.createElement('summary');

        details.appendChild(summary);
        details.appendChild(innerUl);

        summary.textContent = objs.directory;

        for (const items of objs.children) {
            if (typeof items.children[0] === 'string') {
                const lowestLi = document.createElement('li');

                lowestLi.textContent = items.directory;

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
