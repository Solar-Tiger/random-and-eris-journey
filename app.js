import fs from 'fs';
import path from 'path';

fs.readdir('src/pages', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    for (const d of data) {
        console.log(d);

        fs.stat(`src/pages/${d}`, (err, stats) => {
            if (err) {
                console.error(err);
            }

            if (stats.isDirectory()) {
                fs.readdir(`src/pages/${d}`, (err, files) => {
                    if (err) {
                        console.error(err);
                    }

                    for (const file of files) {
                        console.log(file);
                    }
                });
            }
        });
    }

    // console.log(data);

    // for (const d in data) {
    //     console.log(data[0]);
    // }

    // data.forEach((d) => {
    //     console.log(d);
    // });
});
