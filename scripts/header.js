const navbar = document.querySelector('nav.navbar');
const menuIcon = document.querySelector('div.menu-icon i');
const navLinks = document.querySelectorAll('nav.navbar a');

const toggleMenu = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
};

document.querySelector('div.menu-icon').addEventListener('click', toggleMenu);

navLinks.forEach(link => link.addEventListener('click', toggleMenu));
