import './styles.css';
import Background from './beans-round-border.jpg';

function init() {
    let nav = document.getElementById('nav-buttons');
    let homeButton = document.getElementById('home');
    let menuButton = document.getElementById('menu');
    let aboutButton = document.getElementById('about');
    let content = document.getElementById('content');
    
    let header = document.createElement('h1');
    header.textContent = "Skrye's Deli";
    content.appendChild(header);

    let reviewSection = document.createElement('div');
    reviewSection.classList.add('section');

    let reviewText = document.createElement('p');
    reviewText.textContent = 
    `This place is amazing! The food is delicious and the staff is friendly.\n
     I highly recommend the Reuben sandwich. It's the best I've ever had!`;
    
    let reviewCustomer = document.createElement('h3');
    reviewCustomer.textContent = "- Joe S.";

    content.appendChild(reviewSection);
    reviewSection.appendChild(reviewText);
    reviewSection.appendChild(reviewCustomer);

    let hourSection = document.createElement('div');
    let hours = document.createElement('h3');
    hourSection.classList.add('section');
    hours.textContent = "Hours:";
    let weekdayHours = document.createElement('p');
    weekdayHours.textContent = 
    'Closed Mon-Tue\n' +
    'Wed-Fri 11am-9pm';
    let weekendHours = document.createElement('p');
    weekendHours.textContent = 'Sat-Sun 9am-5:30pm';
    content.appendChild(hourSection);
    hourSection.appendChild(hours);
    hourSection.appendChild(weekdayHours);
    hourSection.appendChild(weekendHours);

    let locationSection = document.createElement('div');
    locationSection.classList.add('section');
    let location = document.createElement('h3');
    location.textContent = "Location:";
    content.appendChild(locationSection);
    locationSection.appendChild(location);
    let address = document.createElement('p');
    locationSection.appendChild(address);
    address.textContent = "V374+2V2\n" + "Tanant, Morocco";
}

init();