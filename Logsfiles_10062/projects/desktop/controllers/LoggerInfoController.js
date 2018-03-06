var loggerService = require("../services/LoggerInfoService");

module.exports.createLogger = function(req , res){
    var logger = req.body;
    console.log("logger in controller values ----11----->>>",req)
    console.log("logger in controller values ----222----->>>",logger)
    loggerService.createlogger(logger , function(loggerDetails){
        res.status(201);
        res.json(loggerDetails);
    })
}

module.exports.getLoggerLevel = function(req,res){

loggerService.getLoggerLevel(function(logLevel){
    console.log("log level in controller valeus------->>>>>>",logLevel)
    res.status(200);
    res.json(logLevel);
})
    
    
}