var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId
var userSchema = new mongoose.Schema({
    firstname: {type:String,required:true },
    lastname: {type:String,  required:true},
    phone: {type:String,required:true ,unique:true},
    email: {type:String, required:true ,unique:true},
    username: {type:String,unique:true},
    password: {type:String,require:true},
    address: {
        street:String,
        city:String,
        state: String,
        zip:Number
    },
    type: String,
    cart:[
        { product:{
            id: ObjectId,
            name: String,
            category: String,
            price: Number,
            isAvailable: Boolean,
            image: [String],
            description: String
           
        },
        date:Date,
    }
    ],
    purchases:[
        {
        products:[
            { id: ObjectId,
                name: String,
                category: String,
                price: Number,
                isAvailable: Boolean,
                image: [String],
                description: String
            }
         ],
         date:Date,
         status:String
       }
    ],
    sells:[
        {
            products:[
                { id: ObjectId,
                    name: String,
                    category: String,
                    price: Number,
                    isAvailable: Boolean,
                    image: [String],
                    description: String
                }
             ],
             date:Date,
             status:String,
             customer:{
                firstName: String,
                lastName: String,
                Phone: String,
                email: String,
                address:{
                    street: String,
                    city: String,
                    state: String,
                    zip: Number
                },
                payment:String
             }
           }
    ],
    products:[
        { id: ObjectId,
            name: {type:String ,required:true},
            category: {type:String ,required:true},
            price: {type:Number ,required:true},
            isAvailable: {type:Boolean ,required:true},
            image:{type:[String] ,required:true},
            description: {type:String ,required:true}
        }
    ]


});


module.exports = mongoose.model('User',userSchema)

