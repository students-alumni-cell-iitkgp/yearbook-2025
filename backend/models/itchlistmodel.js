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
    type:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }

})

const Itchlist = mongoose.model('Itchlist', Schema);

module.exports = {Itchlist};