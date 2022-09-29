// external imports
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");

// internal imports
const Page = require("../models/Page");

// get users page
async function getUsers(req, res, next) {
  try {
    const users = await User.find();
    res.render("users", {
      users: users,
    });
  } catch (err) {
    next(err);
  }
}

// add user
async function addUser(req, res, next) {
  let content = {"time":1647800422335,"blocks":[{"id":"DZpZtXH76R","type":"paragraph","data":{"text":"Constant in-game development, community engagement in game development [workshops], adding new in-game features, more ways to play and earn, giveaways and competition outside the game, in-game asset restyling, new player ID collection\/s, game expansions, community events and so on."}}],"version":"2.23.2"};
  // parse content to html using edjs


  let newUser;
  newUser = new Page({
    title: "👐 Retention of existing users",
    type: "page",
    content: JSON.stringify(content)
  });
  
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "page was added successfully!",
      newUser
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

// remove user
async function removeUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });

    // remove user avatar if any
    if (user.avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    res.status(200).json({
      message: "User was removed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
}

module.exports = {
  getUsers,
  addUser,
  removeUser,
};
