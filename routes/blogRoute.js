const express = require('express');
const Blog = require('../models/blog');
const mongoose = require("mongoose");

const router = new express.Router();

router.get('/blogs/getBlogs', (req,res)=> {
    res.send("These are the blogs")
})

router.post('/blogs/postBlog', (req,res)=> {
    try {
        const Blog = ({
            title : req.body.title,
            category : req.body.category,
            description : req.body.description,

        }) 
        // Blog.save();
        // console.log(Blog);
        res.send(Blog)
    }
    catch {
        res.send("some error")
    }
})

router.post('/blogs/deleteBlog/:id', (req,res)=> {
    try {
        res.send(req.params.id)
    }
    catch {
        res.send("some error")
    }
})

router.put('/blogs/updateBlog', (req,res)=>{
    try{
        res.send("blog update")
    }
    catch {
        res.send("Error")
    }
})

module.exports = router;

