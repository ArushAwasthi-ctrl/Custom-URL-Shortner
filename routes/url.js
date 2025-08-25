const express = require('express');
const urlRouter = express.Router();
const {handleShortUrl, handleShortnerRequest} = require('../controllers/url.js')

// Route to create short URL
urlRouter.route('/').post(handleShortUrl);

// Route to redirect when accessing short URL
urlRouter.route('/:id').get(handleShortnerRequest);

module.exports = urlRouter;