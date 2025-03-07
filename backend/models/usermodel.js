const mongoose = require("mongoose");

require('dotenv').config();

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },

    course:{
        type: String,
        required: false
    },

    dob:{
        type:Date,
        required:true,
    },

    email_insti:{
        type:String,
        required:false,
    },
    HOR:{
        type:String,
        required:false,
    },
    department:{
        type:String,
        required:false,
    },
    phone:{
        type:Number,
        required:false,
    },

    caption:{
        type:String,
        required:false,
    },
    pro_pic:{
        type:String,
        required:false,
    },
    rollno:{
        type:String,
        required:true,
        unique:true,
    },
    testimonials:{
        type:Array,
        required:false,
    }

   
})

const User = mongoose.model('User', Schema);

module.exports = {User};