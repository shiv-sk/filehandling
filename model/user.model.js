const mongoose = require('mongoose');

const fileHandlingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:''
    },
    photo:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('User',fileHandlingSchema);
module.exports = User