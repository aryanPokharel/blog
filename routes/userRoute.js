const express = require('express');
const User = require('../models/user');

const mongoose = require("mongoose");
const db = require('../db/db')

const router = new express.Router()

router.post('/users/createUser', (req,res)=>{
    try {
        const user = new User({
            fname : "John",
            lname : "Doe",
            age : 30,
            address : "Pokhara",
            email : "doeJohn@gmail.com",
            username : "john1",
            password : "12345"
        })
    
        user.save();
        res.send(user)
    }
    catch {
        res.send("Error")
    }
})



module.exports = router;