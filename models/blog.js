const mongoose = require ("mongoose");


const Blog = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    subTitle : {
        type : String,
    },
    image : {
        type : String
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    author : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "User"
    },
    writtenAt : {
        type : Date,
        default : Date.now(),
        // Setting immutable as true makes the data stored in this field unchangable
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : Date.now()
    }
})  

module.exports = mongoose.model("Blog", Blog)