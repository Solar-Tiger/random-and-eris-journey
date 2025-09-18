import '../../style.css';
import '../../reset.css';

// ELEMENTS FOR INTERACTIVE MOBILE NAV MENU

const hamburgerMenu = document.querySelector('#hamburger-menu');

const mobileNavMenu = document.querySelector('#mobile-nav-menu');
const mobileNavOverlay = document.querySelector('#mobile-nav-overlay');
const documentBody = document.querySelector('body');

// EVENT LISTENER FOR OPENING MOBILE NAV MENU

hamburgerMenu.addEventListener('click', () => {
    mobileNavMenu.classList.add('mobile-nav-menu--open');
    mobileNavOverlay.classList.add('mobile-nav-overlay--display-block');
    documentBody.classList.add('overflow-body--hidden');
    window.scrollTo(0, 0);
});

// EVENT LISTENER FOR CLOSING MOBILE NAV MENU

document.body.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('mobile-nav-overlay') ||
        e.target.classList.contains('close-x-icon')
    ) {
        mobileNavMenu.classList.remove('mobile-nav-menu--open');
        mobileNavOverlay.classList.remove('mobile-nav-overlay--display-block');
        documentBody.classList.remove('overflow-body--hidden');
    }
});

// IF USER OPEN NAV MENU AND THE SCREEN GOES TOO WIDE AND THEY SCROLL, THIS RESETS EVERYTHING IF THE SCREEN SHRINKS AGAIN

window.addEventListener('resize', () => {
    if (
        window.innerWidth <= 920 &&
        window.scrollY !== 0 &&
        documentBody.classList.contains('overflow-body--hidden')
    ) {
        // window.scrollTo(0, 0);
        window.scrollTo(0, 0);
    }
});

// APPLY MOBILE OR DESKTOP NAV MENU DEPENDING ON SCREEN SIZE

window.addEventListener('resize', () => {
    changeToCorrectNavMenu();
});

// LOAD PROPER NAV MENU WHEN PAGE LOADS

window.addEventListener('load', () => {
    changeToCorrectNavMenu();
});

function changeToCorrectNavMenu() {
    if (
        window.innerWidth < 920 &&
        !mobileNavMenu.classList.contains('mobile-nav-menu')
    ) {
        mobileNavMenu.classList.remove('desktop-nav-menu');
        mobileNavMenu.classList.add('mobile-nav-menu');
    } else if (
        window.innerWidth >= 920 &&
        !mobileNavMenu.classList.contains('desktop-nav-menu')
    ) {
        mobileNavMenu.classList.remove('mobile-nav-menu');
        mobileNavMenu.classList.add('desktop-nav-menu');
    }
}
