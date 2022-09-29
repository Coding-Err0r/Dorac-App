const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const Page = require("../models/Page");

async function getWhitepapers(req, res, next) {
  try {
    const pages = await Page.find({ visible: true }).sort({ order: 1 });
    if (pages.length) res.redirect(`/whitepaper/${pages[0]._id}`);
    else res.redirect("/")
  } catch (err) {
    res.redirect("/");
    console.log(err)
  }
}

async function getWhitepaper(req, res, next) {
  try { 
    const pages = await Page.find({ visible: true }).sort({ order: 1 });
    const groupID = req.query.groupID
    let len = pages.length
    let index, ownPage, prev, next, tempOwnPage
    ownPage = pages.filter((obj, idx) => {
      if (obj._id == req.params.pageID) {
        index = idx
        return true
      }
      return false
    }).pop()

    tempOwnPage = ownPage
    prev = index > 0 ? pages[index - 1] : pages[len - 1]
    next = (index < len - 1) ? pages[index + 1] : pages[0]
   
    if (groupID) {
      ownPage = ownPage.subcontent.filter((obj, idx) => {
        if (obj._id == groupID) {
          index = idx
          return true
        }
        return false
      }).pop()
      
      len = tempOwnPage.subcontent.length
      prev = index > 0 ? tempOwnPage.subcontent[index - 1] : tempOwnPage.subcontent[len - 1]
      next = (index < len - 1) ? tempOwnPage.subcontent[index + 1] : tempOwnPage.subcontent[0]
    }
   
    res.locals.data = pages
    res.locals.title = ownPage.title
    res.locals.updatedAt = ownPage.updatedAt
    res.locals.content = JSON.stringify(ownPage.content)
    res.locals.prev = prev
    res.locals.next = next

    res.render("whitepaper")
  } catch (err) {
    console.log(err)
    res.redirect("/")
  }
}

module.exports = {
  getWhitepapers,
  getWhitepaper
};