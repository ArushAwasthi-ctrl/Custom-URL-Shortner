const express = require('express');
const homepageRouter = express.Router();
const {handleHomePage} = require('../controllers/homepage.js');


homepageRouter.route('/')
.get(handleHomePage);


module.exports = homepageRouter;