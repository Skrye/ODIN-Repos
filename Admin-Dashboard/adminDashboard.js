// HTML DOM Elements
const sidebar = document.querySelector('.sidebar');
const sidebarIcons = document.querySelector('sidebar.icons');
const sidebarButtons = document.querySelector('sidebar.buttons');

// Page Setup
const init = () => {
    loadSidebar();
}

const loadSidebar = function() {
    const sidebarPersonal = ['Home', 'Profile', 'Messages', 'History', 'Tasks', 'Communities'];
    const sidebarUniversal = ['Settings', 'Support', 'Privacy'];
    const sidebarItems = ['Dashboard', ...sidebarPersonal, ...sidebarUniversal];
    for (let i = 0; i < sidebarItems.length; i++) {
        let button = document.createElement('button');
        setupButton(button, sidebarItems[i])
    }
}

const setupButton = (button, x) => {
    switch (x) {
        case '0':
            break;

        default:
            return null;
    }
    sidebarIcons.appendChild(icon);
}

init();