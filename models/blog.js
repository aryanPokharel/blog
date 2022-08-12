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

})

module.exports = mongoose.model("Blog", Blog)