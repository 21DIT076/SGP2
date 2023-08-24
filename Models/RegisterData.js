const mongoose = require('mongoose')

const AddRegisterSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{collection : 'RegisterData'})
const RegData = mongoose.model('AddRegisterSchema',AddRegisterSchema)
module.exports= RegData