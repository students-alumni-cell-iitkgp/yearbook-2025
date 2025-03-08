const mongoose = require("mongoose");

require('dotenv').config();

const Schema = mongoose.Schema({
   user_id:{
         type:String,
         required:true,
   },
   user_name:{
        type:String,
        required:true,
   },

   photo_url:{
    type:String,
    required:true,
   },

    caption:{
     type:String,
     required:true,
    },
    likes:{
        type:Number,
        required:false,
    },
    comments:{
        type:Array,
        required:false,
    },
    date:{
        type:Date,
        required:true,
    }
    
})

const Post = mongoose.model('Post', Schema);

module.exports = {Post};