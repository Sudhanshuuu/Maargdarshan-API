const express = require("express");
const router = express.Router();
const { handleGetAllUndergrad , handleGetAllPostgrad , handleGetPostgrad , handleGetUndergrad } = require("../controller/College");

router.get("/underGrad", handleGetAllUndergrad);
router.get("/underGrad/:programme", handleGetUndergrad);

router.get("/postGrad", handleGetAllPostgrad)
router.get("/postGrad/:programme",handleGetPostgrad)

module.exports = router;

