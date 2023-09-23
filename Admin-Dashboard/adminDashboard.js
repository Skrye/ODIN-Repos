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
        let icon = document.createElement('IMG');
        setupIcon(icon, sidebarItems[i]);
        let button = document.createElement('button');
    }
}

const setupIcon = (icon, x) => {
    switch (x) {
        case '0':
            icon.setAttribute('src', './Dashboard-Icons/view-dashboard.svg');
            icon.setAttribute('alt', 'view-dashboard-icon');
            break;

        default:
            return null;
    }
    sidebarIcons.appendChild(icon);
}

init();