const Page = require("../models/Page");

async function getDashboard(req, res, next) {
  try {
    const pages = await Page.find().sort({ order : 1});
    res.locals.data = pages;
    res.render("dashboard");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getDashboard,
};
