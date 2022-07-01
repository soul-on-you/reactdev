const jwt = require("jsonwebtoken");
const Logger = require("../loggers");

const logger = Logger("auth");

const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

    const token = req.header("Authorization").replace("Bearer ", "");

    // if (!token) {
    //   return res.status(403).json({ message: "Unauthorized" });
    // }

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET
      // (error, decoded) => { //! Можно и так!
      //   if (error) return res.status(403).json({ message: "Unauthorized" });
      //   req.user = decoded;
      //   console.log(decoded);
      //   next();
      // }
    );

    req.user = decoded;
    console.log(decoded);
    next();
  } catch (e) {
    logger.error("Unauthorized", { error: e.message });
    return res.status(403).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
