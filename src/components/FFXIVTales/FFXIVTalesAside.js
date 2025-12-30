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
            // for (let i = 0; i < objs.children.length; i++) {
            //     listAllItems(objs.children[i]);
            // }

            for (const item of objs.children) {
                listAllItems(item);
            }
        }
        // else if (Array.isArray(objs.children)) {
        //     for (const file of objs.children) {
        //         console.log(file);
        //     }
        // }
    }
}

// listAllItems(myObj);

function createSidebarList(objs) {
    // Check if the argument is an object
    if (objs === Object(objs) && !Array.isArray(objs)) {
        // Log directory name
        console.log(objs.directory);

        // Create elements to contain list information
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const details = document.createElement('details');
        const summary = document.createElement('summary');

        ul.appendChild(li);
        li.appendChild(details);
        details.appendChild(summary);

        summary.textContent = objs.directory;

        // Check if Object.children is object or array
        if (objs.children[0] === Object(objs.children[0])) {
            // for (let i = 0; i < objs.children.length; i++) {
            //     listAllItems(objs.children[i]);
            // }

            for (const item of objs.children) {
                createSidebarList(item);
            }
        }
        // else if (Array.isArray(objs.children)) {
        //     for (const file of objs.children) {
        //         console.log(file);
        //     }
        // }

        return ul;
    }
}

// console.log(createSidebarList(myObj));

function createFFXIVTalesSidebar() {
    // create aside to contain list of relevant FFXIV Tales
    const aside = document.createElement('aside');

    // Create: ul, li, details, summary (directory name), repeat

    aside.appendChild(createSidebarList(myObj));

    return aside;
}

// {
//     <ul>
//         <li>
//             <details>
//                 <summary>04_jak_and_daxter</summary>
//                 <ul>
//                     <li>
//                         <details>
//                             <summary>characters</summary>
//                             <ul>
//                                 <li>bad-guys</li>
//                                 <li>good-guys</li>
//                             </ul>
//                         </details>
//                     </li>
//                 </ul>
//             </details>
//         </li>
//     </ul>;
// }

export { createFFXIVTalesSidebar };
