const express = require("express");
const { handleGetCourseData } = require("../controller/Courses");
const router = express.Router();

router.get("/:field",handleGetCourseData);

module.exports = router ;