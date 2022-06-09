const jwt = require("jsonwebtoken");
const Logger = require("../loggers");

const logger = Logger("auth");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.userId = decoded;
    next();
  } catch (e) {
    logger.error("Error in auth middleware");
    return res.status(500).json({ message: "Something went wrong" });
  }
};
