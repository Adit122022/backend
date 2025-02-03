const express = require("express");
const router = express.Router();
const { getRegisterController, postRegisterController, getLoginController, postLoginController } = require("../controllers/user.Controller");

// Register Routes
router.get("/register", getRegisterController);
router.post("/register", postRegisterController);

// Login Routes
router.get('/login', getLoginController);
router.post('/login',postLoginController)

module.exports = router;
