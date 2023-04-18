//! tablica przechowująca dane dodanych produktów
export let cartItems = [];

//! funkcja wysuwająca koszyk
const showCart = () => {
    const cartElement = document.querySelector(".cart");
    if(cartElement.style.right === "-30%"){
        cartElement.style.right = "0";
    }else{
        cartElement.style.right = "-30%";
    }
}

//! funkcja dodająca produkt do tablicy i do local storage
export const addToCart = (product) => {
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

//! funkcja renderująca produkt w koszyku
export const renderCartItems = () => {
    const cartElement = document.querySelector(".cart-items");
    cartElement.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let sum = 0;

    cartItems.map((products) => {
        const cartCounter = document.querySelector(".cart-counter");
        cartCounter.textContent = cartItems.length;
        cartCounter.style.display = "grid";
        
        const liElement = document.createElement("li");
        const imgElement = document.createElement("img");
        const expenseElement = document.querySelector(".expense");
        sum += products.price;
        console.log(sum);
        expenseElement.innerText = "SUMA " + sum.toFixed(2) + " zł";
        
        imgElement.src = products.image;
        imgElement.alt = products.name;
        liElement.innerText = products.name + " - " + products.price + " zł";
        liElement.appendChild(imgElement);

        cartElement.appendChild(liElement);
    });
}

//! funkcja zerująca koszyk
const clearCart = () => {
    const expenseElement = document.querySelector(".expense"); 
    expenseElement.innerText = "SUMA";
    localStorage.removeItem("cartItems");
    cartItems = [];
    const cartCounter = document.querySelector(".cart-counter");
    cartCounter.innerText = "0";
    cartCounter.style.display = "none";
    renderCartItems();
}

//? jeżeli strona się załaduje ma się wykonać funkcja renderCartItems
window.addEventListener("load", renderCartItems);

const clearCartButton = document.querySelector(".clear-cart");
const btnCart = document.querySelector(".cart-icon");


clearCartButton.addEventListener("click", clearCart);
btnCart.addEventListener("click", showCart);