require("dotenv").config();
const mongoose = require('mongoose')
const connectToDB =()=>
{
    mongoose.connect(process.env.DbUrl);
    console.log("Connected to Database");
}

module.exports = {connectToDB};
