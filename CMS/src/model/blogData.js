const mongoose = require("mongoose");
const uri = "mongodb+srv://root:mzwxYdnGK2AYQGyo@cms-b.tzjfjgj.mongodb.net/CMS";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected : blog")
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewBlogSchema = new Schema({
    author:String,
    title:String,
    category:String,
    date:Date,
    body:String
})
var blogData = new mongoose.model('blog',NewBlogSchema);

module.exports = blogData;