const express = require('express');
// const { json } = require("body-parser");
const Blog = require('../models/blog');
const mongoose = require("mongoose");
const db = require('../db/db')

const router = new express.Router();

router.get('/blogs/getBlogs', async (req,res)=> {
    const blogs = await Blog.find();
    res.json(blogs)
  
})

router.post('/blogs/postBlog', (req,res)=> {
    try {
        const blog = new Blog({
            title : req.body.title,
            category : req.body.category,
            description : req.body.description,
            author : req.body.author
        }) 
        blog.save();
        res.send(blog)
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

router.post('/blogs/deleteBlog/:id', (req,res)=> {
    try {
        res.send(req.params.id)
    }
    catch {
        res.send("some error")
    }
})

module.exports = router;

