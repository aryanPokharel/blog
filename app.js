

const express = require('express');
const app = express();

const blog = require('./routes/blogRoute')

app.use(express.json())
app.use(blog)




app.listen(69);



