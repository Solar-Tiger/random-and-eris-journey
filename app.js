import fs from 'fs';
import path from 'path';

fs.readdir('src/pages', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);

    // for (const d in data) {
    //     console.log(data[0]);
    // }

    // data.forEach((d) => {
    //     console.log(d);
    // });
});

// const fruitArr = ['apples', 'oranges', 'bananas'];
// const numbers = [1, 2, 3, 4, 5];

// const fruit = 'fruit';

// numbers.map((fruit) => {
//     console.log(fruit * 2);
// });
