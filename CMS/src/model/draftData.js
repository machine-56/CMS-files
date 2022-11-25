const mongoose = require("mongoose");
const uri = "mongodb+srv://root:mzwxYdnGK2AYQGyo@cms-b.tzjfjgj.mongodb.net/CMS";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected : draft")
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewDraftSchema = new Schema({
    author:String,
    title:String,
    category:String,
    body:String
})
var draftData = new mongoose.model('draft',NewDraftSchema);

module.exports = draftData;