const express = require('express');
const userRouter = express.Router();
const {handleUserSignUp ,handleuserLogin } = require('../controllers/user')
userRouter.route('/').post(handleUserSignUp);
userRouter.route('/login').post(handleuserLogin);

module.exports = userRouter;