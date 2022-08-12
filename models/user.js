const mongoose = require('mongoose')

const User = mongoose.Schema({
    fname : {
        type : String, 
        requird : true
    },
    lname : {
        type : String
    },
    age : {
        type : Number
    },
    address : {
        type : String
    },
    email : {
        type : String
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        requird : true
    },
})

module.exports = mongoose.model("User", User)