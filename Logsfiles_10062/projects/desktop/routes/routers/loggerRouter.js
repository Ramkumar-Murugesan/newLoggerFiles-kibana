var express = require("express");
var router = express.Router();
var controller = require("../../controllers/LoggerInfoController");

router.post("/createLog",controller.createLogger);
router.get("/getLogger",controller.getLoggerLevel);
module.exports = router;