import { renderProducts } from "./dom-utils.js";

const downloadata = async () => {
    try{
        let data = await fetch("./produkty.json");
        let products = await data.json();
        renderProducts(products);
    }
    catch(error){
        console.log(error);
    }
}
downloadata();