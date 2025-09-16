import closeXIcon from '../../assets/images/icons/icon-close.png';

const navMenuItems = [
    {
        pageLink: 'index.html',
        pageName: 'Home'
    },
    {
        pageLink: 'pages/ourstory.html',
        pageName: 'Our Story'
    },
    {
        pageLink: 'pages/ffxivtales.html',
        pageName: 'FFXIV tales'
    },
    {
        pageLink: 'pages/watchlist.html',
        pageName: 'The watchlist'
    }
];

function createNavMenu() {
    // Create nav menu and ul
    const navMenu = document.createElement('nav');

    navMenu.id = 'mobile-nav-menu';
    navMenu.classList.add('mobile-nav-menu');

    // Create ul and li elements
    const navMenuContainer = document.createElement('ul');

    navMenuItems.forEach((navMenuItem) => {
        const li = document.createElement('li');
        const navLink = document.createElement('a');

        navLink.href = navMenuItem.pageLink;
        navLink.textContent = navMenuItem.pageName;

        li.appendChild(navLink);

        navMenuContainer.appendChild(li);
    });

    // Append nav menu container to nav menu
    navMenu.appendChild(navMenuContainer);

    return navMenu;
}

function createMobileNavOverlay() {
    // Create mobile nav overlay
    const mobileNavOverlay = document.createElement('div');

    mobileNavOverlay.id = 'mobile-nav-overlay';
    mobileNavOverlay.classList.add('mobile-nav-overlay');

    // Create close X icon
    const closeXIconImg = document.createElement('img');

    closeXIconImg.id = 'close-x-icon';
    closeXIconImg.classList.add('close-x-icon');
    closeXIconImg.src = closeXIcon;
    closeXIconImg.alt = 'X icon to close mobile nav menu';

    // Append close X icon to mobile nav overlay
    mobileNavOverlay.appendChild(closeXIconImg);

    return mobileNavOverlay;
}

export { createNavMenu, createMobileNavOverlay };
