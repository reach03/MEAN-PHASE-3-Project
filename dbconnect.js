
var express = require("express")
var app = express()

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://localhost:27017/chat";

//let options = {
   // useNewUrlParser:true,
    //useUnifiedTopology:true
//}
//const connect = mongoose.connect(url, options, (err) => {
    //console.log("Database connection", err)
//});


const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;


