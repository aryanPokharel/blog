const mongoose = require("mongoose");
const dbURL = 'mongodb://localhost:27017/Blogs_App';

run();

async function run() {
    await mongoose.connect( dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }, ()=>{
        console.log("Db connected")
    }
    )
}