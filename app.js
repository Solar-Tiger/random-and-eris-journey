import fs from 'fs';
import path from 'path';

fs.readdir('src/pages', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    for (const d in data) {
        console.log(data[d]);
    }

    // data.forEach((d) => {
    //     console.log(d);
    // });
});
