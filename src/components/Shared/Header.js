import { createNavMenu, createMobileNavOverlay } from './NavBar.js';
import hamburgerMenuIcon from '../../assets/images/icons/icon-hamburger-menu.png';
import randomAndErisLogo from '../../assets/images/logo-audioengine.png';

function createHeader() {
    // Create header
    const randomAndErisHeader = document.createElement('header');

    randomAndErisHeader.classList.add('random-and-eris-header');

    // Create and appened hamburger menu to header
    const hamburgerMenu = document.createElement('img');

    hamburgerMenu.id = 'hamburger-menu';
    hamburgerMenu.classList.add('hamburger-menu');
    hamburgerMenu.src = hamburgerMenuIcon;
    hamburgerMenu.alt = 'Mobile Nav Hamburger Menu icon';

    randomAndErisHeader.appendChild(hamburgerMenu);

    // Append Nav Menu to header
    randomAndErisHeader.append(createNavMenu(), createMobileNavOverlay());

    // Create and append logo to a tag
    const logoLink = document.createElement('a');

    logoLink.href = 'index.html';

    const logoLinkImg = document.createElement('img');

    logoLinkImg.classList.add('random-and-eris-logo');
    logoLinkImg.src = randomAndErisLogo;
    logoLinkImg.alt = 'Audio Engine logo';

    logoLink.appendChild(logoLinkImg);

    // Append logo link to header
    randomAndErisHeader.appendChild(logoLink);

    return randomAndErisHeader;
}

export { createHeader };
