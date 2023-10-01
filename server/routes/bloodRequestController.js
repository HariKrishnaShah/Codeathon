const BloodRequest = require("../models/bloodrequest");

const save = async(payload)=>{
    const result = await BloodRequest.create(
        {
            userid:payload.id,
            bloodgroup:payload.bloodgroup??"unknown",
            requesttype:payload.type,
            quantity:payload.quantity??250,
            location:payload.location??""
        }
    );
    return result;
}

const listrequests = async()=>{
    const results = await BloodRequest.find();
    return results;
}
const update = async(id)=>{
    const result = await BloodRequest.findById(id);
    if(!result)
    {
        return result.json("Blood Request Id not found");
    }
    const updated = await BloodRequest.findByIdAndUpdate(id, {
        iscompleted:result.iscompleted?false:true
    });
    return updated;
}


module.exports = {save, listrequests, update};