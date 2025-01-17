const express = require("express");
const { registerController } = require("../controllers/authController");

// creating router object
const router = express.Router();

// routing
// REGISTER METHOD || POST
router.post("/register", registerController);

module.exports = router;
