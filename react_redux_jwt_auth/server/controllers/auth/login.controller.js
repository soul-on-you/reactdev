const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../../models/User");
const Role = require("../../models/Role");
const RefreshToken = require("../../models/RefreshToken");
const Professor = require("../../models/Professor");
const { createAccessJWT, createRefreshJWT } = require("../../utils/createJWT");

const loginController = (logger) => async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: `User with this ${email} does not exist` });
    }

    const isMatchPasswd = await bcryptjs.compare(password, user.password);

    if (!isMatchPasswd) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const accessToken = await createAccessJWT(user);
    const refreshToken = await createRefreshJWT(user);

    // let roleProps;
    // if (user.role === "student") {
    //   const student = await Student.findOne({ userId: user.id });
    //   if (!student) {
    //     return res.status(401).json({ message: "Student not found" });
    //   }
    // }

    // if (user.role === "professor") {
    //   const professor = await Professor.findOne({ userId: user.id });
    //   if (!professor) {
    //     return res.status(401).json({ message: "Professor not found" });
    //   }
    // }

    // const accessToken = jwt.sign(
    //   {
    //     user: {
    //       id: user.id,
    //       serialNumber: user.serialNumber,
    //       role: (await Role.findById(user.role)).role,
    //       avater: user.avatar,
    //     },
    //     [user.role]: {
    //       ...roleProps
    //     },
    //   },
    //   process.env.JWT_ACCESS_SECRET,
    //   { expiresIn: "1h" }
    // );

    // const refreshToken = jwt.sign(
    //   { userId: user.id },
    //   process.env.JWT_REFRESH_SECRET,
    //   { expiresIn: "1d" }
    // );

    // await RefreshToken.findOneAndUpdate(
    //   { userId: user.id },
    //   { token: refreshToken, updatedAt: Date.now() }
    //   // null,
    //   // async (err, token) => {
    //   //   if (err) {
    //   //     logger.error("Error in finding refresh token", {
    //   //       userId: user.id,
    //   //       error: err.message,
    //   //     });

    //   //     return res.status(500).json({ message: "Something went wrong" });
    //   //   }
    //   // }
    // );

    if (req.cookies?.jwt)
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
      // sameSite: "None",
      secure: true,
    });

    return res.status(200).json({
      accessToken,
    });
  } catch (e) {
    console.error(e);
    logger.error("Fail user login with data: ", {
      userData: { email: req.body.email, password: req.body.password },
    });
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = loginController;
