const express = require('express');
const homepageRouter = express.Router();
const {handleHomePage,handleRenderSignUp , handleRenderLogin } = require('../controllers/homepage.js');


homepageRouter.route('/')
.get(handleHomePage);

homepageRouter.route('/signup').get(handleRenderSignUp);
module.exports = homepageRouter;

homepageRouter.route('/signup/login').get(handleRenderLogin);