const express = require("express");
const commonRouter = express.Router();
// const jwt = require('jsonwebtoken');
const blogdata = require('../model/blogData');
const draftdata = require('../model/draftData');
const categorydata = require('../model/categoryData');

// all blog
commonRouter.get('/home/blog', (req,res)=>{
    blogdata.find().sort({date:-1}).then((data)=>{
        res.send(data);
    })
})

// categories
commonRouter.get('/filter', (req,res)=>{
    categorydata.find().then((data)=>{
        res.send(data);
    })
})

// filter blog
commonRouter.post('/blog/find', (req,res)=>{
    let fil=req.body.val;
    blogdata.find({'category':fil}).then((data)=>{
        res.send(data);
    })
})

//recent blogs
commonRouter.get('/profile/blog/:id', (req,res)=>{
    blogdata.find({author:req.params.id}).sort({date:-1}).limit(4).then((data)=>{
        res.send(data);
    })
})

//user blogs
commonRouter.get('/filter/blog/:id', (req,res)=>{
    blogdata.find({author:req.params.id}).then((data)=>{
        res.send(data);
    })
})

// user draft
commonRouter.get('/filter/draft/:id', (req,res)=>{
    draftdata.find({author:req.params.id}).then((data)=>{
        res.send(data);
    })
})

// single blog
commonRouter.get('/blog/getone/:id', (req,res)=>{
    blogdata.findOne({_id:req.params.id}).then((data)=>{
        res.send(data);
    })
})

// single draft
commonRouter.get('/draft/getone/:id', (req,res)=>{
    draftdata.findOne({_id:req.params.id}).then((data)=>{
        res.send(data);
    })
})

// save as post
commonRouter.post('/post', (req,res)=>{
    console.log(req.body.author)
    var newBlog = {
        author:req.body.author,
        title:req.body.title,
        category:req.body.category,
        date:req.body.date,
        body:req.body.body,
    };
    const blog = new blogdata(newBlog);
    blog.save();
    res.send();
})

// save as draft
commonRouter.post('/draft', (req,res)=>{
    console.log(req.body.author)
    var newDraft = {
        author:req.body.author,
        title:req.body.title,
        category:req.body.category,
        body:req.body.body
    };
    const draft = new draftdata(newDraft);
    draft.save();
    res.send();
})

// edit blog
commonRouter.put('/blog/edit', (req,res)=>{
    blogdata.findByIdAndUpdate({'_id':req.body._id},
    {$set:{
        title:req.body.title,
        category:req.body.category,
        body:req.body.body,
        date:req.body.date
    }}).then(()=>{
        res.status(200).send();
    })
})

// edit draft
commonRouter.put('/draft/edit', (req,res)=>{
    draftdata.findByIdAndUpdate({'_id':req.body.id},
    {$set:{
        title:req.body.title,
        category:req.body.category,
        body:req.body.body,
        date:req.body.date
    }}).then(()=>{
        res.status(200).send();
    })
})

// delete blog
commonRouter.delete('/blog/remove/:id', (req,res)=>{
    blogdata.findOneAndDelete({'_id':req.params.id}).then(()=>{
        res.status(200).send();
    })
})

// delete draft
commonRouter.delete('/draft/remove/:id', (req,res)=>{
    console.log('')
    draftdata.findOneAndDelete({'_id':req.params.id}).then(()=>{
        res.status(200).send();
    })
})

module.exports = commonRouter;