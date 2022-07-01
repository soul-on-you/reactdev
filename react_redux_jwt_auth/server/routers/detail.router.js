const Router = require("express");
const router = Router();

// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { check, validationResult } = require("express-validator");
// const RefreshToken = require("../models/RefreshToken");

const User = require("../models/User");
const Role = require("../models/Role");
const Student = require("../models/Student");
const Professor = require("../models/Professor");
const Logger = require("../loggers");
const fileService = require("../services/file.service");

const logger = Logger("auth");

router.get("/", fileService.getDetails);
router.get("/download", fileService.loadDetailById);
router.post("/upload", fileService.uploadDetail);

module.exports = router;
