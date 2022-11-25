const mongoose = require("mongoose");
const uri = "mongodb+srv://root:mzwxYdnGK2AYQGyo@cms-b.tzjfjgj.mongodb.net/CMS";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected : user")
})
.catch(()=>{
    console.error(Error);
})
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    fname:String,
    email:String,
    pwd:String,
    uname:String,
    phno:Number,
    role:String
})
var userData = new mongoose.model('user',NewUserSchema);

module.exports = userData;