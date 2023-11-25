const historyController = require("../controllers/historyController");

const router = require("express").Router();

//LOGIN
router.get("/:id", historyController.getLogs);

module.exports = router;