// script.js

// Select the hamburger button and menu elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add click event to toggle the menu visibility
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle 'active' class
});
