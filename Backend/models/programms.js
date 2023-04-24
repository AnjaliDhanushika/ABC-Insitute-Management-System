const mongoose = require ('mongoose');

const programeSchema = new mongoose.Schema({

    programeId:{
        type:String,
        required:true
    },

    ProgrameName:{
        type:String,
        required:true
    },

    Duration:{
        type:String,
        required:true
    },

    Cost:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('programms',programeSchema);