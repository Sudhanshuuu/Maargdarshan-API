const Course = require("../models/Courses");

handleGetCourseData = async (req, res) => {
    try {
       let {field} = req.params ;
       let course  = await Course.findOne({course : field});
       res.json(course.exams).status(200);
    }
    catch (err) {
        res.json(err).status(500);
    }
}

module.exports = {handleGetCourseData}