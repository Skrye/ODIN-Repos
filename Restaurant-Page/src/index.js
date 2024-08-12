import './styles.css';
import menu from './menu.js';
import about from './about.js';

function init() {
    let homeButton = document.getElementById('home');
    let menuButton = document.getElementById('menu');
    let aboutButton = document.getElementById('about');
    let content = document.getElementById('content');
    content.innerHTML = '';
    let header = document.createElement('h1');
    header.textContent = "Skrye's Deli";
    content.appendChild(header);

    let reviewSection = document.createElement('div');
    reviewSection.classList.add('section');
    let reviewText = document.createElement('p');
    reviewText.innerHTML = 
    `This place is amazing! The food is delicious and the staff is friendly.<br>
     I highly recommend the Reuben sandwich. It's the best I've ever had!`;
    let reviewCustomer = document.createElement('p');
    reviewCustomer.innerHTML = "- <strong>Joe S.</strong>";
    content.appendChild(reviewSection);
    reviewSection.appendChild(reviewText);
    reviewSection.appendChild(reviewCustomer);

    let hourSection = document.createElement('div');
    content.appendChild(hourSection);
    let hours = document.createElement('p');
    hourSection.classList.add('section');
    hours.innerHTML = "<strong>Hours:</strong>";
    let weekdayHours = document.createElement('p');
    weekdayHours.innerHTML = 
    `<strong>Mon-Tue</strong> Closed<br>` +
    `<strong>Wed-Fri</strong> 11am-9pm`;
    let weekendHours = document.createElement('p');
    weekendHours.innerHTML = '<strong>Sat-Sun</strong> 9am-5:30pm';
    hourSection.appendChild(hours);
    hourSection.appendChild(weekdayHours);
    hourSection.appendChild(weekendHours);

    let locationSection = document.createElement('div');
    locationSection.classList.add('section');
    let location = document.createElement('p');
    location.innerHTML = "<strong>Location:</strong>";
    content.appendChild(locationSection);
    locationSection.appendChild(location);
    let address = document.createElement('p');
    locationSection.appendChild(address);
    address.innerHTML = "V374+2V2<br>" + "Tanant, Morocco";

    homeButton.addEventListener('click', function() {
        content.innerHTML = '';
        content.appendChild(header);
        content.appendChild(reviewSection);
        content.appendChild(hourSection);
        content.appendChild(locationSection);
    });

    menuButton.addEventListener('click', menu);
    aboutButton.addEventListener('click', about);
    homeButton.addEventListener('click', init);
}

init();

export default init;