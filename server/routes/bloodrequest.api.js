const express = require("express");
const router = express.Router();
const bloodRequestController = require("./bloodRequestController");
const fetchuser = require("../middleware/fetchuser");

router.post("/", fetchuser, async(req, res)=>{
    const payload = {...req.body, ...req.user};
    const result = await bloodRequestController.save(payload);
    return res.json(result);
});
router.get("/listrequests", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can see donation requests.");
    }
    const results = await bloodRequestController.listrequests();
    return res.json(results);
})

router.patch("/update", fetchuser, async(req, res)=>{
    if(req.user.role != "admin")
    {
        return res.json("Only admin can see donation requests.");
    }
    const update = await bloodRequestController.update(req.body.requestid);
    return res.json(update);
})



module.exports = router;