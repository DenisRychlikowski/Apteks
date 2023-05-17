//! import funkcji addToCart i renderCartItems z cart-items
import { addToCart, renderCartItems } from "./cart-utils.js";

//! funkcja zwracająca zdjęcie, nazwe, cenę produktu i przycisk dodaj 
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

//! funkcja zwracająca pojemnik o klasie product
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

//! funkcja renderująca elementy w sekcji main-products
export const renderProducts = (products) => {
    const mainElement = document.querySelector(".main-products");
    
    if(location.pathname.endsWith("index.html") || location.pathname.endsWith("Apteks/")) { 
        products.map((products) => {
            if(products.id < 4) {
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else if(location.pathname.endsWith("sport-sklep.html")){
        products.map((products) => {
            if(products.category === "sport"){
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else if(location.pathname.endsWith("zdrowie-sklep.html")){
        products.map((products) => {
            if(products.category === "zdrowie"){
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else if(location.pathname.endsWith("kosmetyki-sklep.html")){
        products.map((products) => {
            if(products.category === "kosmetyki"){
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else if(location.pathname.endsWith("higiena-sklep.html")){
        products.map((products) => {
            if(products.category === "higiena"){
                mainElement.appendChild(createProductDiv(products));
            }
        });
    }
    else{
        products.map((products) => {
            mainElement.appendChild(createProductDiv(products));
        });
    }
} 
