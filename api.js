import { renderProducts } from "./dom-utils.js";

//! funkcja pobierająca dane i wywołująca funkcję renderProducts

const downloadata = async () => {
    try{
        let data
        if(location.pathname.endsWith("sport-sklep.html")){
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