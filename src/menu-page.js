import { createFooter } from "./home-page.js"

import springRollsImg from "../images/menu-items/spring-rolls.jpg";
import prawnCrackersImg from "../images/menu-items/prawn-crackers.jpg";
import sweetSourChickenImg from "../images/menu-items/sweet-sour-chicken.jpg";
import kungPaoChickenImg from "../images/menu-items/kung-pao-chicken.jpg";
import beefBlackBeanImg from "../images/menu-items/beef-in-black-bean.jpg";
import eggFriedRiceImg from "../images/menu-items/egg-fried-rice.jpg";
import houseSpecialRiceImg from "../images/menu-items/house-special-fried-rice.png";
import cocaColaImg from "../images/menu-items/coca-cola.jpg";
import greenTeaImg from "../images/menu-items/green-tea.jpg";

function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.className = "menu-page";

    createMenuHero(content);
    createMenu(content);
    createFooter(content);
}

function createMenuHero(container) {
    const heroContainer = document.createElement("div");
    heroContainer.id = "menuHero";

    const heroOverlay = document.createElement("div");
    heroOverlay.id = "menuOverlay";

    const heroHeader = document.createElement("h1");
    heroHeader.textContent = "Taste the Tradition of Chinese Cuisine";

    const heroText = document.createElement("p");
    heroText.textContent = "Quality ingredients. Authentic flavours. Made to order.";

    heroOverlay.append(heroHeader, heroText);
    heroContainer.appendChild(heroOverlay);
    container.appendChild(heroContainer);
}

function createMenu(container) {

    const menuSpacing = document.createElement("div");
    menuSpacing.id = "menuSpacing";

    const menuContainer = document.createElement("div");
    menuContainer.id = "menuContainer";

    const categoryTitle = document.createElement("h2");
    categoryTitle.id = "categoryTitle";
    categoryTitle.textContent = "Starters";

    const categories = document.createElement("div");
    categories.id = "categories";

    const menuGrid = document.createElement("div");
    menuGrid.id = "menuGrid";

    const objCat = [
        { name: "Starters", key: "starters" },
        { name: "Chicken", key: "chicken" },
        { name: "Beef", key: "beef" },
        { name: "Rice", key: "rice" },
        { name: "Drinks", key: "drinks" }
    ];

    objCat.forEach(cat => {
        const button = document.createElement("button");
        button.textContent = cat.name;
        button.dataset.category = cat.key;

        button.addEventListener("click", () => {
            categoryTitle.textContent = cat.name;
            renderMenu(cat.key, menuGrid);
        });

        categories.appendChild(button);
    });

    menuContainer.appendChild(categoryTitle);
    menuContainer.appendChild(categories);
    menuContainer.appendChild(menuGrid);

    menuSpacing.appendChild(menuContainer);
    container.appendChild(menuSpacing);

    renderMenu("starters", menuGrid);
}


// Create Menu 

function createMenuItem(name, price, image, options = {}) {
  return {
    name,
    price,
    image,
    category: options.category || "",
    popular: options.popular || false,
    spicy: options.spicy || false,

    getFormattedPrice() {
      return `£${this.price.toFixed(2)}`;
    }
  };
}

// Menu item list

const menuData = {
  starters: [
    createMenuItem("Spring Rolls", 3.50, springRollsImg),
    createMenuItem("Prawn Crackers", 2.80, prawnCrackersImg),
  ],

  chicken: [
    createMenuItem("Sweet & Sour Chicken", 6.80, sweetSourChickenImg, { popular: true }),
    createMenuItem("Kung Po Chicken", 7.20, kungPaoChickenImg, { spicy: true }),
  ],

  beef: [
    createMenuItem("Beef in Black Bean Sauce", 7.50, beefBlackBeanImg)
  ],

  rice: [
    createMenuItem("Egg Fried Rice", 3.20, eggFriedRiceImg),
    createMenuItem("House Special Fried Rice", 4.50, houseSpecialRiceImg)
  ],

  drinks: [
    createMenuItem("Coca-Cola", 1.50, cocaColaImg),
    createMenuItem("Green Tea", 1.20, greenTeaImg)
  ]
};

// Function to render menu 

function renderMenu(categoryKey, grid) {
    grid.innerHTML = "";

    const items = menuData[categoryKey];

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-info">
                <h3>${item.name}</h3>
                <p class="price">${item.getFormattedPrice()}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}


export { loadMenu };