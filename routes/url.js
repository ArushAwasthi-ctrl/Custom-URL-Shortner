const express = require('express');
const urlRouter = express.Router();
const {handleShortUrl, handleShortnerRequest, handleAnalayticsbyId} = require('../controllers/url.js')

// Route to create short URL
urlRouter.route('/').post(handleShortUrl);

// Route to redirect when accessing short URL
urlRouter.route('/:id').get(handleShortnerRequest);

// Route to get analytics for a short URL
urlRouter.route('/analytics/:id').get(handleAnalayticsbyId);

module.exports = urlRouter;
