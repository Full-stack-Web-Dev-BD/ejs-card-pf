const mongoose=require('mongoose')
const ContactlistSchema= mongoose.Schema({
    name:String,
    number:String,
    email:String
})
const ContactlistModel=mongoose.model('ContactlistModel',ContactlistSchema)
module.exports=ContactlistModel