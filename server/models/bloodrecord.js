const mongoose = require("mongoose");
const {Schema} = mongoose;

const bloodrecord = new Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        bloodgroup:{
            type:String,
            required:true
        },
        donateddate:{
            type:Date,
            required:true,
            default:Date.now()
        },
        donatetype:{
            type:String,
            enum:["blood", "plasma", "rbc", "wbc", "platelet"]
        },
        expireddate:{
            type:Date,
            default:Date.now() + 30*24*60*60*1000
        },
        isexpired:{
            type:Boolean,
            default:false
        },
        location:{
            type:String
        },
        quantity:{
            type:Number,
            required:true,
            default:750
        },
        recordedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        isavailable:{
            type:Boolean,
            required:true,
            default:true
        }
    }
);
const BloodRecord = mongoose.model("bloodrecord", bloodrecord);
BloodRecord.createIndexes();
module.exports = BloodRecord;
