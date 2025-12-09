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
