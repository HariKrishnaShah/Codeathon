const express = require("express");
const router = express.Router();
const donateController = require("./donateController");
const fetchuser = require("../middleware/fetchuser");

router.post("/", fetchuser, async(req, res)=>{
    const payload = {...req.body, ...req.user};
    const result = await donateController.save(payload);
    return res.json(result);
})
router.get("/listrequests", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can see donation requests.");
    }
    const results = await donateController.listrequests();
    return res.json(results);
})

router.patch("/update", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can see donation requests.");
    }
    const update = await donateController.update(req.body.donateid);
    return res.json(update);
})

module.exports = router;