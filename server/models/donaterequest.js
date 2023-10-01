const mongoose = require("mongoose");
const {Schema} = mongoose;

const donaterequest = new Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        bloodgroup:{
            type:String,
            required:true,
            default:"unknown"
        },
        donatetype:{
            type:String,
            enum:["blood", "plasma", "rbc", "wbc", "platelet"],
            default:"blood"
        },
        requestdate:{
            type:Date,
            required:true,
            default:Date.now()
        },
        location:{
            type:String
        },
        quantity:{
            type:Number,
            required:true,
            default:250
        },
        iscompleted:{
            type:Boolean,
            default:false
        }
    }
);
const DonateRequest = mongoose.model("dontaterequest", donaterequest);
DonateRequest.createIndexes();
module.exports = DonateRequest;
