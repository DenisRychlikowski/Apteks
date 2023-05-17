//! import funkcji renderProducts z dom-utils
import { renderProducts } from "./dom-utils.js";

//! funkcja pobierająca dane i wywołująca funkcję renderProducts
const downloadata = async () => {
    try{
        let data;
        let l = location.pathname;
        if(l.endsWith("sport-sklep.html") || l.endsWith("zdrowie-sklep.html") || l.endsWith("higiena-sklep.html") || l.endsWith("kosmetyki-sklep.html")){
            data = await fetch("../produkty.json");    
        }
        else{
            data = await fetch("produkty.json");    
        }
        let products = await data.json();
        renderProducts(products);
    }
    catch(error){
        console.log(error);
    }
}
downloadata();

//! funkcja do mobilnego menu
const menuIcon = document.querySelector(".menu-icon");
const headerMenu = document.querySelector(".header-menu");

menuIcon.addEventListener('click', () => {
    headerMenu.classList.toggle('mobile-menu')
})