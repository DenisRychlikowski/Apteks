import { addToCart, renderCartItems } from "./cart-utils.js";

const createItems = (products) => {
    const imgElement = document.createElement("img");
    imgElement.src = products.image;
    imgElement.alt = products.name;

    const spanNameElement = document.createElement("span");
    spanNameElement.classList.add("name-product");
    spanNameElement.innerText = products.name;

    const spanPriceElement = document.createElement("span");
    spanPriceElement.classList.add("price-product");
    spanPriceElement.innerText = products.price + " zł";

    const btnElement = document.createElement("button");
    btnElement.innerText = "Dodaj do koszyka";

    return [imgElement, spanNameElement, spanPriceElement, btnElement];
}

const createProductDiv = (products) => {
    const productDivElement = document.createElement("div");
    productDivElement.classList.add("product");

    const [imgElement, spanNameElement, spanPriceElement, btnElement] = createItems(products);
    productDivElement.appendChild(imgElement);
    productDivElement.appendChild(spanNameElement);
    productDivElement.appendChild(spanPriceElement);
    productDivElement.appendChild(btnElement);
    btnElement.addEventListener("click", () => addToCart(products));
    btnElement.addEventListener("click", () => renderCartItems());

    return productDivElement;
}

export const renderProducts = (products) => {
    const mainElement = document.querySelector(".main-products");
    
    if(location.pathname == "index.html"){
        products.map((products) => {
            if (products.id < 4) {
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else{
        
        console.log("lol");
        products.map((products) => {
            mainElement.appendChild(createProductDiv(products));
        });
    }
} 
