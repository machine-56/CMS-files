const express = require("express");
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const userdata = require("../model/userData");

// admin login
loginRouter.post("/admin", (req,res)=>{
    let admin = req.body;
    userdata.findOne({email: admin.email})
    .then((data)=>{
        if(!data){
            res.status(401).send({message:"Invalid Username"});
          }
        else{
            if(data.role != 'admin'){
                res.status(401).send({message:"Invalid Username"});
                console.log('error idk wow')    //------------
            }
            else if(admin.pwd!==data.pwd){
                res.status(401).send({message:"Invalid Password"})
            }
            else{
                let a = data.uname;
                let payload = {subject:data.uname+data.pwd}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token,a});
            }
        }
    })

});

// user login
loginRouter.post("/user", (req,res)=>{
    let user = req.body;
    userdata.findOne({email: user.email})
    .then((data)=>{
        if(!data){
            res.status(401).send({message:"Invalid Username"});
          }
        else{
            if(user.pwd!==data.pwd){
            res.status(401).send({message:"Invalid Password"})
            }
            else{
                let u=data.uname;
                let payload = {subject:data.uname+data.pwd}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token,u});
            }
        }
    })
});

module.exports = loginRouter;