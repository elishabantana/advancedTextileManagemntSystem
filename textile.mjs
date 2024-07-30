export default class Textile{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    set setPrice(newPrice){
        this.price=newPrice;
    }
    set setName(newName){
        this.name=newName;
    }
    get getPrice(){
        return this.price;
    }
    get getName(){
        return this.name
    }
    toString(){
        return `${this.name}: ${this.price}`;
    }

    static isValid(newPrice){
        
        if(typeof newPrice == 'number' && newPrice>0 ){

            return true;
        }else{
            return "the price you entered is invalid";
        }
      
    }

}

