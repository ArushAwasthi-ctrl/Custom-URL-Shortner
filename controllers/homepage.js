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
function handleRenderSignUp(req,res) {
   return res.render('signup')
}
function handleRenderLogin(req,res){
    return res.render('login');
}
module.exports = { handleHomePage,handleRenderSignUp , handleRenderLogin};
