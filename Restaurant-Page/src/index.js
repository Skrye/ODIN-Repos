import './styles.css';

function init() {
    let nav = document.getElementById('nav-buttons');
    let homeButton = document.getElementById('home');
    let menuButton = document.getElementById('menu');
    let aboutButton = document.getElementById('about');
    let content = document.getElementById('content');
    let header = document.createElement('h1');
    header.textContent = "Skrye's Deli";
    content.appendChild(header);

    let review = document.createElement('div');
    review.classList.add('section');

    let reviewText = document.createElement('p');
    reviewText.textContent = "This place is amazing! The food is delicious and the staff is friendly. I highly recommend the Reuben sandwich. It's the best I've ever had!";
    
    let reviewCustomer = document.createElement('p');
    reviewCustomer.textContent = "- Joe S.";
    reviewCustomer.classList.add('important');

    content.appendChild(review);
    review.appendChild(reviewText);
    review.appendChild(reviewCustomer);

    let hours = document.createElement('h3');
    hours.classList.add('section');
    hours.textContent = "Hours:";
    let weekdayHours = document.createElement('p');
    weekdayHours.textContent = "Closed Mon-Tue\n" + "Wed-Fri 11am-9pm";
    content.appendChild(hours);
    hours.appendChild(weekdayHours);

    let location = document.createElement('div');
    location.classList.add('section');
    location.textContent = "Location:";
    content.appendChild(location);
    let address = document.createElement('p');
    location.appendChild(address);
    address.textContent = "V374+2V2\n" + "Tanant, Morocco";
}

init();