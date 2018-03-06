var model = require("../models/loggerInfo");
var logging = require("../config/logger_level")
var fs = require('fs');
module.exports.createLogger = function(loggerDetails , callback){
   var saveLogger = new model(loggerDetails);
   console.log("before changing level --1111-->> ",loggerDetails);
   console.log("before changing level --4544-->> ",loggerDetails.level);

var h = {
    "level":loggerDetails.level
}
var appRoot = process.env.PWD;
console.log("---------myu die -- > ",appRoot)
  fs.writeFile(appRoot+'/config/logger_level.json',JSON.stringify(h), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
callback(saveLogger);
}

module.exports.getLoggerByID = function(loggerID , callback){
    model.find({_id : loggerID} , function(err,logger){
        if(err){
            console.log("error to save logger---->>>",err);
            callback(err);
        }
        else{
            console.log("error to save logger---->>>",logger);
            callback(logger);
        }
    })
}

module.exports.getLoggerLevel = function( callback){
var loglevel = logging;
callback(loglevel);
}