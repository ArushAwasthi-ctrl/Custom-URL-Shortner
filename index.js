const express = require('express');
const { log } = require('node:console');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.listen(process.env.PORT , ()=>{
    console.log(`Server is Listening on Port: ${process.env.PORT}`);
})