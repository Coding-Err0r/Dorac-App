const mongoose = require("mongoose");

const subPageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

const pageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: Infinity,
  },
  type: {
    type: String,
    enum: ["page", "group"],
    required: true
  },
  visible: {
    type: Boolean,
    default: true
  },
  content: String,
  subcontent: [subPageSchema]
}, { timestamps: true });

const Page = mongoose.model("Page", pageSchema);
module.exports = Page;