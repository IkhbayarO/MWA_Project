module.exports = class Product{
    private id:String;
    constructor(public name:String, category, price, public isAvailable: Boolean, image, description){}

    getPrice(){
        return this.price+" $"


}



    // { id: ObjectId,
    //     name: {type:String ,required:true},
    //     category: {type:String ,required:true},
    //     price: {type:Number ,required:true},
    //     isAvailable: {type:Boolean ,required:true},
    //     image:{type:[String] ,required:true},
    //     description: {type:String ,required:true}
    // }

};