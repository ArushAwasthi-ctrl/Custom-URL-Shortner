const express = require('express');
const { log } = require('node:console');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const urlRouter = require('./routes/url.js')
const { dbCall} = require('./db/dbCall.js')
const path = require('path');
// connect with data base
    dbCall();

// middleware to accept form input and JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// whenever we request sever with /url route the urlRouter will fire 
app.set("view engine","ejs");
app.set('views',path.resolve('./views'))
app.use('/url/allUrls',(req,res)=>{
    app.render('homepage');
})
app.use('/url',urlRouter);

app.listen(process.env.PORT , ()=>{
    console.log(`Server is Listening on Port: ${process.env.PORT}`);
})