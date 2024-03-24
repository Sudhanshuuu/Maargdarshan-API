const mongoose = require("mongoose");

let CoursesSchema = new mongoose.Schema({
    course: {
        type: String
    },
    exams: [{
        name: {
            type: String,
            required: true
        },
        purpose: {
            type: String
        },
        Eligiblity: {
            type: String
        },
        ApplicationMode: {
            type: String
        },
        source: {
            type: String
        }
    }]
});

module.exports = mongoose.model("Courses", CoursesSchema);