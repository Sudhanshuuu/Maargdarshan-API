const mongoose = require("mongoose");


let CollegeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    },
    surveyYear: {
        type: Number
    },
    discipline_group_category: {
        type: String
    },
    admission_criterion: {
        type: String
    },
    duration_year: {
        type: Number
    },
    type: {
        type: String
    },
    statutory_body: {
        type: String
    },
    system: {
        type: String
    },
    level: {
        type: String
    },
    discipline_group: {
        type: String
    },
    programme :{
        type : String
    },
    department:{
        type:String
    }
})

module.exports = mongoose.model("College" , CollegeSchema);