const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('innactive') //El metodo toggle alterna el remover y poner la clase segun si el elemento tiene la clase o no la tiene en el momento de hacer click en el elemento
}