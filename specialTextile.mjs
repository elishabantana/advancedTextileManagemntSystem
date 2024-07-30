import Textile from "./textile.mjs";

export default class SpecialTextile extends Textile{
    constructor(name, price,discountPercentage){
        super(name,price);
        this.discountPercentage=discountPercentage;
    }
    discount(){
        return this.price-(this.discountPercentage*this.price/100);
        
    }
}
