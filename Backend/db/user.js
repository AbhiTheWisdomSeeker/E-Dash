const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model('user',userSchema);


// This is to define model of the Data 

// Schema to define the data type and model to define the db as the schema blue print

 // mongoose.model() is used to define the model of the data
 // mongoose.model() takes two parameters, the name of the model and the schema of the model
 // mongoose.model() returns the model of the data
 