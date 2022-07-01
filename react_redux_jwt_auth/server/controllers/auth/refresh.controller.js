const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const Role = require("../../models/Role");
const RefreshToken = require("../../models/RefreshToken");
const { createRefreshJWT, createAccessJWT } = require("../../utils/createJWT");

const refreshController = (logger) => async (req, res) => {
  try {
    const oldRefreshToken = req.cookies?.jwt;

    if (!oldRefreshToken) {
      return res.status(401).json({ message: "No refresh token" });
    }

    // await RefreshToken.findOne({ token: refreshToken }, (err, token) => {
    //   if (err) {
    //     logger.error("Error in finding refresh token, It may be forbidden!", {
    //       token: refreshToken,
    //       tokenData: jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET),
    //       error: err.message,
    //     });
    //   }
    // });

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

    console.log(oldRefreshToken);

    const foundUser = await RefreshToken.findOne({ token: oldRefreshToken });
    if (!foundUser) {
      return res
        .status(403)
        .json({ message: "Invalid refresh token, not found in DB" });
    }

    let userId;
    try {
      userId = jwt.verify(oldRefreshToken, process.env.JWT_REFRESH_SECRET).userId;
    } catch (e) {
      return res.status(403).json({ message: "Expired refresh token" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: `Uncorrect refresh token data` });
    }

    // const accessToken = jwt.sign(
    //   {
    //     user: {
    //       id: user.id,
    //       serialNumber: user.serialNumber,
    //       role: await Role.findById(user.role),
    //       avater: user.avatar,
    //     },
    //   },
    //   process.env.JWT_ACCESS_SECRET,
    //   { expiresIn: "1h" }
    // );

    // const refreshtoken = jwt.sign(
    //   { userId: user.id },
    //   process.env.JWT_REFRESH_SECRET,
    //   {
    //     expiresIn: "1d",
    //   }
    // );

    const accessToken = await createAccessJWT(user);
    const refreshToken = await createRefreshJWT(user);

    // await RefreshToken.findOne({ userId: user.id }, async (err, token) => {
    //   if (err) {
    //     logger.error("Error in finding refresh token", {
    //       userId: user.id,
    //       error: err.message,
    //     });

    //     return res.status(500).json({ message: "Something went wrong" });
    //   }

    //   if (token) {
    //     token.token = refreshToken;
    //     await token.save();
    //   } else {
    //     await new RefreshToken({ userId: user.id, token: refreshToken }).save();
    //   }
    // });

    // await RefreshToken.findOneAndUpdate(
    //   { userId: user.id },
    //   { token: refreshToken, updatedAt: Date.now() }
    // );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: true,
    });

    return res.status(200).json({
      accessToken,
    });
  } catch (e) {
    logger.error("Fail user refresh him tokens"); //with data: ", { refreshToken }
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = refreshController;
