const authController = require("../controllers/authController");

const router = require("express").Router();

//LOGIN
router.post("/login", authController.loginUser);

//LOGOUT
router.post("/logout", authController.logoutUser);

module.exports = router;