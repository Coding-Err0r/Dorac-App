const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/People");

function getLogin(req, res, next) {
  res.render("login");
}

async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(req.body.password, user.password);
      if (isValidPassword) {
        const userObject = {
          userID: user._id,
          name: user.name,
          email: user.email,
        };
        const token = jwt.sign(userObject, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
        res.cookie(process.env.COOKIE_NAME, token, { maxAge: process.env.JWT_EXPIRY, httpOnly: true, signed: true });
        res.locals.loggedInUser = userObject;
        res.redirect("/dashboard");
      } else throw createError("Login failed! Please try again.");
    } else throw createError("Login failed! Please try again.");
  } catch (err) {
    res.render("login");
  }
}

function logout(req, res) {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("logged out");
}

module.exports = {
  getLogin,
  login,
  logout,
};