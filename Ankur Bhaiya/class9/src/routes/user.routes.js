const express = require("express");
const router = express.Router();
const { getRegisterController, postRegisterController } = require("../controllers/user.Controller");

// Register Routes
router.get("/register", getRegisterController);
router.post("/register", postRegisterController);

module.exports = router;
