const authController = require("../controllers/authController");

const router = require("express").Router();

// router.post("/register", async(req,res) => {
// move logic to controller
// })


//REGISTER
// router.post("/register", authController.registerUser);
//LOGIN
router.post("/login", authController.loginUser);

//LOGOUT
router.post("/logout", authController.logoutUser);

module.exports = router;