// FUNCTION TO CREATE FFXIV TALES SECTION

function createFFXIVTalesSection(currentIndex = 0) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const imageContainer = document.createElement('div');
    const description = document.createElement('p');
    const btnLink = document.createElement('a');

    // Create section contianing all information
    section.classList.add('our-ffxiv-tales');

    // Create title
    title.textContent = ourFFXIVTalesContent[currentIndex].title;

    // Create image container and images
    imageContainer.classList.add('image-container');

    ourFFXIVTalesContent[currentIndex].images.forEach((img) => {
        const myImage = document.createElement('img');

        myImage.src = img;

        imageContainer.appendChild(myImage);
    });

    // Create description
    description.textContent = ourFFXIVTalesContent[currentIndex].paragraph;

    // Create link
    btnLink.textContent = ourFFXIVTalesContent[currentIndex].linkText;
    btnLink.href = ourFFXIVTalesContent[currentIndex].link;

    // Append all elements
    section.append(title, imageContainer, description, btnLink);

    return section;
}

export { createFFXIVTalesSection };
