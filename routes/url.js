const express = require('express');
const urlRouter = express.Router();
const {handleShortUrl, handleShortnerRequest, handleAnalayticsbyId} = require('../controllers/url.js')
urlRouter.route('/').post(handleShortUrl);
urlRouter.route('.//:id').get(handleShortnerRequest);
urlRouter.route('/analytics/:id').get(handleAnalayticsbyId);
module.exports = urlRouter;