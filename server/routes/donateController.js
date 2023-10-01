const DonateRequest = require("../models/donaterequest");

const save = async(payload)=>{
    const donateRequest = await DonateRequest.create(
        {
            userid:payload.id,
            bloodgroup:payload.bloodgroup??"unknown",
            donatetype:payload.donatetype??"blood",
            location:payload.location??"Vellore",
            quantity:payload.quantity??750
        }
    );
    return donateRequest;
}

const listrequests = async()=>{
    const results = await DonateRequest.find();
    return results;
}
const update = async(id)=>{
    const result = await DonateRequest.findById(id);
    if(!result)
    {
        return result.json("Donation Id not found");
    }
    const updated = await DonateRequest.findByIdAndUpdate(id, {
        iscompleted:result.iscompleted?false:true
    });
    return updated;
}

module.exports = {save, listrequests, update};