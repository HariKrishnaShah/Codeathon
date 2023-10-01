var jwt = require('jsonwebtoken');
const User = require("../models/user");
jwtSecretKey = "IamHari";

const fetchuser = async(req, res, next)=>
{
    const token = req.header('authToken')
    if(!token)
    {
        return res.status(401).send({success:false, error:"Please authenticate with valid credentials"});
    }
    try
    {
        const data = jwt.verify(token, jwtSecretKey);
        //Adding user object data from the data to request.
        req.user = data.user;
        const user = await User.findById(req.user.id);
        if(!user)
        {
            return res.status(404).send({success:false, error:"User Not Found"});
        }
        next()
    }
    catch(error){
        console.log(error.message);
        res.status(401).send({success:false, error:"Please authenticate with valid credentials"});    
}
}


module.exports = fetchuser;