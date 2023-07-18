const { createLogger, transports, format } = require("winston");
require("winston-daily-rotate-file");

const customFormat = format.combine(
  format.timestamp(),
  format.printf((info) => {
    return `${info.timestamp} - [${info.level?.toUpperCase()}] - ${
      info.message
    }`;
  })
);

//Create a new transport for each day
const trasportRotateFiles = new transports.DailyRotateFile({
  filename: "evoli-%DATE%.log", //log file name
  datePattern: "YYYY-MM-DD", //each day a new file
  maxSize: "20m",
  maxFiles: "14d",
  dirname: "logs", //log folder
});

const logger = createLogger({
  format: customFormat,
  transports: [new transports.Console({ level: "silly" }), trasportRotateFiles],
});

module.exports = { logger };