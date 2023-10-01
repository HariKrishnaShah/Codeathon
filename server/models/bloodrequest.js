const mongoose = require("mongoose");
const {Schema} = mongoose;

const bloodrequest = new Schema(
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
        requesttype:{
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
const BloodRequest = mongoose.model("bloodrequest", bloodrequest);
BloodRequest.createIndexes();
module.exports = BloodRequest;
