const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", userController.getAllUser); //, middlewareController.verifyToken

//DELETE AN USER
router.get("/:id", userController.deleteAnUser); //,middlewareController.verifyTokenAdmin

module.exports = router;