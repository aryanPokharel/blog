const mongoose = require("mongoose");

const dbURL = 'mongodb://localhost:27017/Blogs_App';
mongoose.connect(dbURL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})