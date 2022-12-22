const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu () {
    aside.classList.add('innactive');
    desktopMenu.classList.toggle('innactive') //El metodo toggle alterna el remover y poner la clase segun si el elemento tiene la clase o no la tiene en el momento de hacer click en el elemento
}

function toggleMobileMenu () {
    aside.classList.add('innactive');
    mobileMenu.classList.toggle('innactive');
}

function toggleCartAside () {
    desktopMenu.classList.add('innactive'); //Oculta el desktopMenu cuando se le da click al Carrito
    mobileMenu.classList.add('innactive'); //Oculta el mobileMenu cuando se clickea el carrito
    aside.classList.toggle('innactive'); //Alterna entre mostrar y ocultar el aside(My Order) cuando se clickea el carrito
}