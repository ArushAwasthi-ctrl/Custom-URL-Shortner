const User = require('../models/users-model');
const {v4:uuid} = require('uuid');
const { handleHomePage } = require('./homepage.js');

async function handleUserSignUp(req,res) {
    const {username , email ,password} = req.body;
    try {
        await User.create({
            username:username,
            password:password,
            email:email
        });
        
        // Redirect to homepage controller to handle the rendering
        return handleHomePage(req, res);
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
async function handleuserLogin(req,res) {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email , password});
        if(!user)
        {
            // User not found, redirect to homepage with error
            return res.status(401).redirect('/signup/login');
        }
        const uid = uuid();
        console.log(uid);
        
        // User found, redirect to homepage
        return handleHomePage(req, res);
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {handleUserSignUp, handleuserLogin};
