const studentController = require("../controllers/studentController");

const router = require("express").Router();

//LOGIN
router.get("/:id/balance", studentController.getBalance);

module.exports = router;