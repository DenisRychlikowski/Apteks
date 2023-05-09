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