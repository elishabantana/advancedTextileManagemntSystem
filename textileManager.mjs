import Textile from "./textile.mjs";


export default class TextileManager {
    constructor(){
        this.myTextileProductSet=new Set();
    }
    add(newName, newPrice){
        this.myTextileProductSet.add(new Textile(newName, newPrice));
        return this.myTextileProductSet;
    }
    display(){
        for(let product of this.myTextileProductSet.values()){
            console.log(product);
        }
    }
    updatePrice(searchName,newPrice){
        for(let product of this.myTextileProductSet.values()){
            if(product.name == searchName){
              product.price=newPrice;
            }
        }
        console.log(this.myTextileProductSet);
        return this.myTextileProductSet;
    }
    deleteTextile(searchName){
        for(let product of this.myTextileProductSet.values()){
            if(product.name == searchName){
              this.myTextileProductSet.delete(product);
            }
        }
       
        return this.myTextileProductSet;
    }
}
