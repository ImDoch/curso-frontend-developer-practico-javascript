const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('innactive') //El metodo toggle alterna el remover y poner la clase segun si el elemento tiene la clase o no la tiene en el momento de hacer click en el elemento
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('innactive');
}