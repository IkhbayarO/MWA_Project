export class Product {
    private id:String;

    constructor(public name: String, public category: String, public price: Number,
                public isAvailable: Boolean, public image: String[], public description: String) {
    }

    getPrice(): String {
        return this.price + " $";
    }

    getId(): String{
        return this.id;
    }

    setId(id): void{
        this.id=id;
    }

};