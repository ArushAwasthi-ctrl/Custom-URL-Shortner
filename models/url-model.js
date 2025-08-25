const mongoose = require("mongoose");
const { timeStamp } = require("node:console");
const { type } = require("node:os");
const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrL: {
      type: String,
      required: true,
    },
    clickHistory: [
      {
        timeStamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("Url",urlSchema);

module.exports = URL;