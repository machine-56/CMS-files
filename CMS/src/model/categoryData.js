const mongoose = require("mongoose");
const uri = "mongodb+srv://root:mzwxYdnGK2AYQGyo@cms-b.tzjfjgj.mongodb.net/CMS";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected : Blog-category")
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewCategorySchema = new Schema({
    category:String
})
var categoryData = new mongoose.model('category',NewCategorySchema);

module.exports = categoryData;