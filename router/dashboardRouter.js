const express = require("express");
const { getDashboard } = require("../controller/dashboardController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();
router.get("/", decorateHtmlResponse("Dashboard"), checkLogin, getDashboard);

module.exports = router;
