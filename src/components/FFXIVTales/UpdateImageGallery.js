function fetchCloudinaryImage(publicId) {
    const cloudName = 'duaozkbsv';

    const url = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto/${publicId}`;

    return url;
}

function updateImageGallery(directoryName, objs) {
    // Check if the directory name equals the directory you're looking for AND it's an Object
    if (directoryName !== objs.directory && objs === Object(objs)) {
        for (let i = 0; i < objs.children.length; i++) {
            updateImageGallery(directoryName, objs.children[i]);
        }
    }

    // Make sure it's an Object else do nothing with it
    else if (objs === Object(objs)) {
        let ffxivTalesImageGalery = document.querySelector(
            '.ffxiv-tales-image-gallery'
        );

        ffxivTalesImageGalery.textContent = '';

        for (let i = 0; i < objs.children.length; i++) {
            // console.log(objs.children[i]);

            const img = document.createElement('img');

            img.src = fetchCloudinaryImage(objs.children[i]);

            ffxivTalesImageGalery.appendChild(img);
        }
    }
}

export { updateImageGallery };
