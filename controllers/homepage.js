const URL = require("../models/url-model.js");

async function handleHomePage(req, res) {
  try {
    const urls = await URL.find({});
    return res.render("home-page", {
      urls: urls,
      id: null // No ID when just loading the homepage
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

module.exports = { handleHomePage };
