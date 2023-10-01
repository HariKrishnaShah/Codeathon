const express = require("express");
const router = express.Router();
const bloodRecordController = require("./bloodRecordController");
const fetchuser = require("../middleware/fetchuser");

router.post("/save", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can record the blood donation");
    }
    const payload = {...req.body, ...req.user};
    const result = await bloodRecordController.save(payload);
    return res.json(result);
})

//List all available blood and blood type
router.get("/list", fetchuser, async(req, res)=>{
    const results = await bloodRecordController.list();
    return res.json(results);
})

//Group the blood and donation type and display sum of available
router.get("/summaryav", async(req, res)=>{
    isavailable = true;
    const results = await bloodRecordController.summary(isavailable);
    return res.json(results);
})
router.get("/summaryused", async(req, res)=>{
    isavailable = false;
    const results = await bloodRecordController.summary(isavailable);
    return res.json(results);
})
//Search Blood type
router.post("/search", async(req, res)=>{
    const payload = {...req.body};
    const results = await bloodRecordController.search(payload);
    return res.json(results);
})
//update blood to not available
router.patch("/update", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can record the blood donation");
    }
    const result = await bloodRecordController.update(req.body.recordid);
    return res.json(result);
})

module.exports = router;