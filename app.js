const express = require('express');
// const  db  = require('./db/db');
const app = express();
const blog = require('./routes/blogRoute')
const user = require('./routes/userRoute')

app.use(express.json())
app.use(blog)
app.use(user)
// app.use(db)

app.listen(69);



