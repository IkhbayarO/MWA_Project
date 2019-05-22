var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId
var userSchema = new mongoose.Schema({

    firstname: {type:String,required:true },
    lastname: {type:String,  required:true},
    phone: {type:String,required:true },
    email: {type:String, required:true ,unique:true},
    username: {type:String,unique:true},
    password: {type:String,required:true},
    address: {
        street:String,
        city:String,
        state: String,
        zip:Number
    },
    type: String,
    cart:[
            { 
                _id: String,
                product:{
                    _id: String,
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
            _id: String,
            product:
                {   _id: String,
                    name: String,
                    category: String,
                    price: Number,
                    isAvailable: Boolean,
                    image: [String],
                    description: String
                },
            date:Date,
            status:String
       }
    ],
    sells:[
        {
            _id: String,
            product:
                    {   _id: String,
                        name: String,
                        category: String,
                        price: Number,
                        isAvailable: Boolean,
                        image: [String],
                        description: String
                    },
            date:Date,
            status:String,
            customer:{
                _id: String,
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

        {   _id: String,
            name: {type:String },
            category: {type:String },
            price: {type:Number },
            isAvailable: {type:Boolean },
            image:{type:[String] },
            description: {type:String }
        }
    ]


});

userSchema.index({products:1});

module.exports = mongoose.model('User',userSchema)

