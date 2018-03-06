'use strict';
const winston = require('winston');
var loggger = require('./logger_level')
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
// const levelOnly = require("winston-levelonly");
const createLogstash = require('logstash');
require('winston-daily-rotate-file');

// required
// const url = process.env.LOGSTASH_URL;
// const url = "/usr/share/logstash/bin/logstash-simple.conf";
// console.log("----logstash URL-enviroooo---->>>> ",process.env)
// console.log("----logstash URL----->>>> ",url)
// optional
// const tags = ['production', 'api'];
// const level = "info";

// // Create logger instance
// const newlogger = createLogstash(url, tags, level);

// newlogger.info("Hello Logger!", { data: 123 });


// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleString();
const logger = new (winston.Logger)({
  transports: [
    new winston.transports.DailyRotateFile({
      level: loggger.level,
      filename:  logDir + '/logs.log',
      handleExceptions: true,
      json: true,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd.',
      prepend: true,
      logstash: true,
      handleExceptions: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: true,
      prettyPrint : true,
      depth : 4,
      showLevel:true,

     // levelOnly
  }),
  //https
  new winston.transports.Http({

  }),
  // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level :loggger.level,
      // levelOnly,
      json:true,
      prettyPrint : true,
      depth : 4,
      showLevel:true,
      handleExceptions: true,
    }),
  
  ],
  exitOnError: false,  
});

process.on('uncaughtException', function (err) {
  // logger.error('uncaughtException', { message : err.message, stack : err.stack }); // logging with MetaData
  // process.exit(1); // exit with failure
});
module.exports =logger;
