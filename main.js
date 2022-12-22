const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

//Mostrando y ocultando partes del html con event listeners

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartshoppingCartContainer);

function toggleDesktopMenu () {
    shoppingCartContainer.classList.add('innactive');
    desktopMenu.classList.toggle('innactive') //El metodo toggle alterna el remover y poner la clase segun si el elemento tiene la clase o no la tiene en el momento de hacer click en el elemento
}

function toggleMobileMenu () {
    shoppingCartContainer.classList.add('innactive');
    mobileMenu.classList.toggle('innactive');
}

function toggleCartshoppingCartContainer () {
    desktopMenu.classList.add('innactive'); //Oculta el desktopMenu cuando se le da click al Carrito
    mobileMenu.classList.add('innactive'); //Oculta el mobileMenu cuando se clickea el carrito
    shoppingCartContainer.classList.toggle('innactive'); //Alterna entre mostrar y ocultar el shoppingCartContainer(My Order) cuando se clickea el carrito
}

//Creando HTML desde JS

//Aqui estamos creando un arreglo de objetos, estos objetos contienen la informacion de cada producto que se venderá en la pagina
const productList = [];
productList.push({
    name: 'Byke',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//Aqui estamos recorriendo el arreglo donde por cada elemento, en este caso, producto, se creará un div en el documento HTML.
function renderProducts(array) {
    for (product of array) {  //Es una forma abreviada de usar el ciclo for: for ( |cualquier nombre| of |lista que queremos recorrer| ), donde 'cualquier nombre' es cada uno de los elementos del array.

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfoDiv.append(productPrice, productName);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }

}
renderProducts(productList);