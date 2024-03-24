const express = require("express");
const { handlePostData } = require("../controller/Login");
const router = express.Router();

router.post("/",handlePostData);

module.exports = router ;