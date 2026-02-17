import { loadHome } from "./home-page.js"
import { loadContact } from "./contact-page.js"
import { loadMenu } from "./menu-page.js"
import "./styles.css";   
import "./home-style.css"
import "./contact-style.css"
import "./menu-style.css"

// Recreate the bamboo branch image
// Maybe add box to popular dishes

const content = document.getElementById('content');
const buttons = document.querySelectorAll('header nav button');

function clearContent() {
  content.innerHTML = '';
}

function switchTab(tab) {
    clearContent();
    
    content.className = tab + '-page'; 

    switch(tab) {
        case 'home': loadHome(content); break;
        case 'menu': loadMenu(content); break;
        case 'contact': loadContact(content); break;
    }
}


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
    })
})



switchTab('home');
