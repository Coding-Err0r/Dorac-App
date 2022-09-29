const express = require("express");
const { getWhitepapers, getWhitepaper } = require("../controller/whitepaperController");

const router = express.Router();
router.get("/", getWhitepapers);
router.get("/:pageID", getWhitepaper);

module.exports = router;