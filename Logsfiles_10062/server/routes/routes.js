var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Student_Default_Activity", routers.Student_Default_ActivityRouter);

module.exports = api;