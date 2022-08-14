const express = require("express");
const path = require("path");

const router = express.Router();

const displayController = require("../controllers/DisplayController");

router.get("/", displayController.GetIndex);
router.get("/action", displayController.GetActionMovie);
router.get("/horror", displayController.GetHorrorMovie);
router.get("/comedy", displayController.GetComedyMovie);
router.get("/suspense", displayController.GetSuspenseMovie);
router.get("/documentaries", displayController.GetDocumentariesMovie);


module.exports = router;