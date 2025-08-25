const express = require('express');
const { log } = require('node:console');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const urlRouter = require('./routes/url.js')
const { dbCall} = require('./db/dbCall.js')

// connect with data base
    dbCall();

// middleware to accept form input and JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// whenever we request sever with /url route the urlRouter will fire 
app.use('/url',urlRouter);

app.listen(process.env.PORT , ()=>{
    console.log(`Server is Listening on Port: ${process.env.PORT}`);
})