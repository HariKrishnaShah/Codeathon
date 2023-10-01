const BloodRecord = require("../models/bloodrecord");
const User = require("../models/user");
const save = async(payload)=>{
    let user = await User.findById(payload.id);
    if(!user)
    {
        return res.status(404).send("User not found");
    }
    const result = await BloodRecord.create(
        {
            userid:payload.id,
            bloodgroup:payload.bloodgroup??"unknown",
            donatetype:payload.donatetype??"blood",
            location:payload.location??"Vellore",
            quantity:payload.quantity??750,
            recordedBy:payload.id
        }
    );
    return result;
}

const list = async()=>{
    const results = BloodRecord.find();
    return results;
}

const summary = async(status)=>{
    const results = BloodRecord.aggregate([
        {
            $match:{
                isavailable:status
            }
        },
    {
        $group: {
            _id: {
                bloodgroup: "$bloodgroup",
                donatetype: "$donatetype"
            },
            totalQuantity: { $sum: "$quantity" }
        }
    },
    {
        $project: {
            _id: 0,
            bloodgroup: "$_id.bloodgroup",
            donatetype: "$_id.donatetype",
            totalQuantity: 1
        }
    }
]);
    return results;
}

const search = async(payload)=>{
    const results = BloodRecord.aggregate([
        {
            $match:{
                isavailable:true,
                bloodgroup:payload.bloodgroup,
                donatetype:payload.type
            }
        },
    {
        $group: {
            _id: {
                bloodgroup: "$bloodgroup",
                donatetype: "$donatetype"
            },
            totalQuantity: { $sum: "$quantity" }
        }
    },
    {
        $project: {
            _id: 0,
            bloodgroup: "$_id.bloodgroup",
            donatetype: "$_id.donatetype",
            totalQuantity: 1
        }
    }
]);
    return results;
}

const update = async(recordid)=>{
    const search = await BloodRecord.findById(recordid);
    const result = await BloodRecord.findByIdAndUpdate(recordid, {
        isavailable:search.isavailable?false:true
    })
    return result;
}

module.exports = {save, list, summary, search, update};