const express = require("express");
const { getPage, updatePage, uploadBlockFile, updateOrderOfDocs, getSinglePage, toggleVisibility, createNewBlock, deleteblock } = require("../controller/pageController");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")
const { checkLogin } = require("../middlewares/common/checkLogin")
const upload = require("../utilities/multer")

const router = express.Router();
router.post("/updateOrderOfDocs", checkLogin, updateOrderOfDocs);
router.post("/uploadBlockFile", checkLogin, upload.single('image'), uploadBlockFile);
router.get("/:pageID/toggle", checkLogin, toggleVisibility);
router.get("/:pageID/remove", checkLogin, deleteblock);
router.get("/:pageID", decorateHtmlResponse("Dashboard"), checkLogin, getPage);
router.get("/", checkLogin, createNewBlock);
router.get("/get/:pageID", checkLogin, getSinglePage);
router.post("/:pageID", checkLogin, updatePage);


module.exports = router;