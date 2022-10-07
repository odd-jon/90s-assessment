/* NAV MENU FUNCTION */



function asideMenuToggle() {
    const asideMenu = document.getElementById('aside-menu');
    asideMenu.classList.toggle('aside-menu--active');
}

const menuButton = document.getElementById('site-header__menuButton');
menuButton.addEventListener('click', asideMenuToggle);



/* CONTROLS FUNCTION */

function asideControlsToggle() {
    const asideControls = document.getElementById('aside-controls');
    asideControls.classList.toggle('aside-controls--active');
}

const controlsButton = document.getElementById('site-header__controlsButton');
controlsButton.addEventListener('click', asideControlsToggle);