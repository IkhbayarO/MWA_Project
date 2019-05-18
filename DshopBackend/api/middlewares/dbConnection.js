var mongoose = require('mongoose')

module.exports = function(){

    mongoose.connect("mongodb+srv://dshop:<umwana12>@cs572final-4gja2.mongodb.net/test")

var db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection Error!'))
db.once('open',function(){
    console.log("We are connected!!!")
})
}