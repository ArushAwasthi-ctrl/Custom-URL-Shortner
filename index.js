const express = require("express");
const { log } = require("node:console");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const urlRouter = require("./routes/url.js");
const { dbCall } = require("./db/dbCall.js");
// connect with data base
dbCall();

// middleware to accept form input and JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using views to perform server side rendering using ejs 
    app.set("view engine","ejs");
    app.set("views",path.resolve('./views'));
    app.use("/homepage",(req,res)=>{
           res.render('home-page');
    })
 


// whenever we request sever with /url route the urlRouter will fire
app.use("/url", urlRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on Port: ${process.env.PORT}`);
});
