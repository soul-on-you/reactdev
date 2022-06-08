const express = require("express");
const cors = require("cors");

//! PRODUCTION
require("dotenv").config({ path: "./.env.production.local" });

//! DEVELOPMENT
require("dotenv").config({ path: "./.env.development.local" });

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, console.log("Server started on port 5000"));
