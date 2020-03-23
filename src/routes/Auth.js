const express = require("express");
const router = express.Router();
const user_Controller = require("../controller/User");

router.post("/register", user_Controller.registerUser);
router.post("/login", user_Controller.loginUser);

module.exports = router;
