import BlackTeaCake from './img/black-tea-cake.jpeg';
import LayeredSalad from './img/layered-salad.jpg';
import TortillaRollups from './img/tortilla-rollups.jpg';
import Coffee from './img/coffee-cup.jpg';
import ChickenSandwich from './img/chicken-sandwich.jpg';

function menu() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    let header = document.createElement('h1');
    header.textContent = "Menu";
    content.appendChild(header);

    class MenuItem {
        constructor(name, description, price, image, type) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
            this.type = type;
        }
    }

    const menuItems = [
        new MenuItem('Black Tea Cake with Honey Buttercream', 'A moist black tea cake with honey buttercream frosting.', '$4.50', BlackTeaCake, 'Sides'),
        new MenuItem('Layered Salad', 'A salad with layers of lettuce, peas, cheese, and bacon.', '$6.50', LayeredSalad, 'Sides'),
        new MenuItem('Tortilla Rollups', 'Tortilla rolls filled with cream cheese, turkey, carrots, cucumber, lettuce, and avocado.', '$9.50', TortillaRollups, 'Main Dishes'),
        new MenuItem('Coffee', 'A cup of coffee.', '$3.50', Coffee, 'Drinks'),
        new MenuItem('Chicken Sandwich', 'A sandwich with fried chicken, lettuce, tomato, and mayonnaise.', '$8.50', ChickenSandwich, 'Main Dishes')
    ]

    let drinksSection = document.createElement('div');
    drinksSection.classList.add('menu');
    let drinksHeader = document.createElement('h3');
    drinksHeader.textContent = "Drinks";
    drinksHeader.classList.add('menu');
    content.appendChild(drinksHeader);
    content.appendChild(drinksSection);

    let sidesSection = document.createElement('div');
    sidesSection.classList.add('menu');
    let sidesHeader = document.createElement('h3');
    sidesHeader.textContent = "Sides";
    sidesHeader.classList.add('menu');
    sidesSection.appendChild(sidesHeader);
    content.appendChild(sidesSection);

    let mainDishesSection = document.createElement('div');
    mainDishesSection.classList.add('menu');
    let mainDishesHeader = document.createElement('h3');
    mainDishesHeader.textContent = "Main Dishes";
    mainDishesSection.appendChild(mainDishesHeader);
    content.appendChild(mainDishesSection);

    menuItems.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.classList.add('section');
        let itemName = document.createElement('h3');
        itemName.textContent = item.name;
        let itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        let itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemImage);

        if (item.type === 'Drinks') {
            drinksSection.appendChild(itemDiv);
        } else if (item.type === 'Sides') {
            sidesSection.appendChild(itemDiv);
        } else if (item.type === 'Main Dishes') {
            mainDishesSection.appendChild(itemDiv);
        }
    });
}

export default menu;