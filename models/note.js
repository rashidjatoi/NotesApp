// Steps
// 1. Define schema -> details of fileds like Note has id , userid, title , content, dateadded
// 2. Create Model -> <Model Name> <Schema> Note

// Initilizing mongoose 
const mongoose = require('mongoose');

// Creating Schema
const noteSchema = mongoose.Schema({
    id:{
        type: String,
        unique : true,
        required : true
    },

    userid:{
        type: String,
        required: true
    },

    title:{
        type: String,
        required: true
    },

    content:{
        type: String
    },

    dateAdded:{
        type:Date,
        default: Date.now
    }
});

// Creating Model & Exporting the module
module.exports = mongoose.model("Note",noteSchema);