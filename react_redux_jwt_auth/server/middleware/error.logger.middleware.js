const Logger = require("../loggers");
const logger = Logger("request");

const errorLogger = (err, req, res, next) => {
  logger.error(`${err.name}: ${err.message}`);
  res.status(500).send(err.message);
};

module.exports = errorLogger;
