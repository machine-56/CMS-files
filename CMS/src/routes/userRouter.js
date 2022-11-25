const express = require("express");
var nl2br  = require('nl2br');
const userRouter = express.Router();
// const jwt = require('jsonwebtoken');
const blogdata = require('../model/blogData');
const draftdata = require('../model/draftData');
const categorydata = require('../model/categoryData');



module.exports = userRouter;