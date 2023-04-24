const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({

    StudentId:{
        type:String,
        required:true
    },

    StudentName:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },

    Contact:{
        type:String,
        required:true
    },

    program: { 
        type: String, 
        required: true },


});

module.exports = mongoose.model('students',studentSchema);