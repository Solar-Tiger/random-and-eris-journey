async function updateImageGallery() {
    const imageData = '../../data/gallery.json';

    try {
        const response = await fetch(imageData);

        const result = await response.json();

        console.log(result);

        const testImg = document.createElement('img');

        testImg.src = result.image1;

        const main = document.querySelector('main');

        main.appendChild(testImg);
    } catch (error) {
        console.error(error.message);
    }
}

export { updateImageGallery };
