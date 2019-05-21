
export class User{

    private id:String
    public street:String
    public city:String
    public state:String
    public zipcode:String
    public type:String
    public cart:Array<object>
    public purchases:Array<object>
    public sells:Array<object>
    public products:Array<object>
    private password:string
    
    constructor(public firstname:String,public lastname:String,public username:String,public email:String,public phone:String,public password:string){

    }

    getAddress(){
      return `${this.state}, ${this.city}, ${this.street}, ${this.zipcode}`
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }

    setSells(sells){
        this.sells=sells
    }

    setProducts(prods){
        this.products= prods
    }

    setType(type){
        this.type=type
    }

    setCart(cart){
        this.cart=cart
    }
    setPurchases(purchases){
        this.purchases = purchases
    }

    setPassword(pwd){
        this.password
    }


}