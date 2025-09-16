import { createNavMenu, createMobileNavOverlay } from './NavBar.js';
import hamburgerMenuIcon from '../../assets/images/icons/icon-hamburger-menu.png';
import randomAndErisLogo from '../../assets/images/logo-audioengine.png';

function createHeader() {
    // Create header
    const randomAndErisheader = document.createElement('header');

    randomAndErisheader.classList.add('random-and-eris-header');

    // Create and appened hamburger menu to header
    const hamburgerMenu = document.createElement('img');

    hamburgerMenu.id = 'hamburger-menu';
    hamburgerMenu.classList.add('hamburger-menu');
    hamburgerMenu.src = hamburgerMenuIcon;
    hamburgerMenu.alt = 'Mobile Nav Hamburger Menu icon';

    randomAndErisheader.appendChild(hamburgerMenu);

    // Append Nav Menu to header
    randomAndErisheader.append(createNavMenu(), createMobileNavOverlay());

    // Create and append logo link to header
    const logoLink = document.createElement('a');

    logoLink.href = 'index.html';

    const logoLinkImg = document.createElement('img');

    logoLinkImg.classList.add('random-and-eris-log');
    logoLinkImg.src = randomAndErisLogo;
    logoLinkImg.alt = 'Audio Engine logo';

    randomAndErisheader.appendChild(logoLink);

    return randomAndErisheader;
}

export { createHeader };
