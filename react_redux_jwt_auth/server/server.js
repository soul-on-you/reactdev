require("dotenv").config({ path: `.${process.env.NODE_ENV}.env` });

const express = require("express");
const mongoose = require("mongoose");

const requestLogger = require("./middleware/request.logger.middleware");
const credentials = require("./middleware/credentials.middleware");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const authRouter = require("./routers/auth.router");
const authMiddleware = require("./middleware/auth.middleware");
const errorLogger = require("./middleware/error.logger.middleware");

const app = express();

app.use(requestLogger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

app.use(authMiddleware);

app.use(errorLogger);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });

    app.listen(
      process.env.PORT,
      console.log(`Server started on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();

// 3dock -док просто хуита
// 3deus - бог
// w3dock - дерьмо
// w3blaDe
// w3b-paper
// 3dock-paper
// x-3d
// intersection - пересечение
// axis - ось
