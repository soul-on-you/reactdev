const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routers/auth.router");
const Role = require("./models/Role");
const Graduation = require("./models/Graduation");

//! PRODUCTION
// require("dotenv").config({ path: "./.env.production.local" });

//! DEVELOPMENT
require("dotenv").config({ path: "./.env.development.local" });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

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
