const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true
        },
        joined:{
            type:Date,
            required:true,
            default:Date.now()
        },
        role:{
            type:String,
            enum:["admin", "user", "org"],
            default:"user"
        },
        tattoo:{
            type:Boolean
        },
        gender:{
            type:String,
            enum:["male", "female", "unknown"],
            default:"unknown"
        },
        dob:{
            type:Date,
        },
        weight:{
            type:Number,
            default:0
        },
        allergies:
        {
            type:String,
        },
        medications:{
            type:String,
        },
        medhistory:{
            type:String,

        },
        isverified:{
            type:Boolean
        }  

    }
);
const User = mongoose.model("user", userSchema);
User.createIndexes();
module.exports = User;
