const express = require("express");
const signupRouter = express.Router();
// const jwt = require('jsonwebtoken');
const userdata = require("../model/userData");

signupRouter.post("/", (req,res)=>{ 
    var newUser = {
        fname:req.body.fname,
        email:req.body.email,
        pwd:req.body.pwd,
        uname:req.body.uname,
        phno:req.body.phno,
        role:req.body.role
    };
    const user = new userdata(newUser);
    user.save();

    res.status(200).send();
});

module.exports = signupRouter;