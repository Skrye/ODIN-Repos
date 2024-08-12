function about() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    let header = document.createElement('h1');
    header.textContent = "About";
    let aboutText = document.createElement('p');
    aboutText.innerHTML = "Skrye's Deli is a family-owned restaurant that has been serving the Tanant area for over 20 years. We pride ourselves on providing delicious food and excellent customer service. Our menu features a variety of sandwiches, salads, and drinks. We look forward to serving you soon!";
    aboutText.classList.add('section');
    content.appendChild(header);
    content.appendChild(aboutText);

    class contact {
        constructor(name, role, phone) {
            this.name = name;
            this.role = role;
            this.phone = phone;
        }
    }
    const contacts = [
        new contact('Skrye', 'Owner', '555-555-5555'),
        new contact('John', 'Manager', '555-555-5556'),
        new contact('Jane', 'Chef', '555-555-5557')
    ]

    contacts.forEach(contact => {
        let contactDiv = document.createElement('div');
        contactDiv.classList.add('section');
        let contactName = document.createElement('h3');
        contactName.textContent = contact.name;
        let contactRole = document.createElement('p');
        contactRole.textContent = contact.role;
        let contactPhone = document.createElement('p');
        contactPhone.textContent = contact.phone;
        contactDiv.appendChild(contactName);
        contactDiv.appendChild(contactRole);
        contactDiv.appendChild(contactPhone);
        content.appendChild(contactDiv);
    });
}

export default about;