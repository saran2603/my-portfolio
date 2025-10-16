document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Adjust for the fixed header height
                const headerOffset = 70; 
                const elementPosition = targetSection.getBoundingClientRect().top;

  // --- Mobile Navigation Menu Functionality ---
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');
const navLinksInMenu = navMenu.querySelectorAll('a');

// Function to open/close the mobile menu when the icon is clicked
hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon between hamburger (bars) and close (X)
    const icon = hamburgerIcon.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Function to automatically close the menu when a link is clicked
navLinksInMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            // Reset the icon back to hamburger
            const icon = hamburgerIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
// Function to close the menu when a link is clicked
navLinksInMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            // Reset the icon back to hamburger
            const icon = hamburgerIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

