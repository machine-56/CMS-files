const express = require("express");
const adminRouter = express.Router();
// const jwt = require('jsonwebtoken');
const userdata = require("../model/userData");
const categorydata = require('../model/categoryData');

adminRouter.get('/findUser', (req,res)=>{
    userdata.find().then((data)=>{
        res.send(data);
    })
})

adminRouter.put("/configusr/ad", (req,res)=>{
    let user = req.body;
    console.log(user);
    userdata.findOneAndUpdate({_id:user._id},{$set:{role:'admin'}})
    .then(()=>{
        res.send();
    })
})

adminRouter.put("/configusr/user", (req,res)=>{
    let user = req.body;
    userdata.findOneAndUpdate({_id:user._id},{$set:{role:'user'}})
    .then(()=>{
        res.send();
    })
})

adminRouter.put('/add/category', (req,res)=>{
    const newlog = new categorydata(req.body);
    newlog.save();
    res.send();
})

adminRouter.put('/edit/category', (req,res)=>{
    categorydata.findOneAndUpdate({'_id':req.body.id},{$set:{'category':req.body.ncat}}).then(()=>{
        res.status(200).send();
    })
})

adminRouter.delete('/delete/category/:id', (req,res)=>{
    categorydata.findOneAndDelete({'_id':req.params.id}).then(()=>{
        res.status(200).send();
    })
})

module.exports = adminRouter;