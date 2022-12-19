const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const { validateToken } = require("../middleware/AuthMiddleware");

const userData= "SELECT * FROM `employee`"

router.get('/', validateToken,(req, res) => {
    db.query(userData,(err,result)=>{
        if(err){
            res.json({error:"error"})
        }
        else{
            res.json(result)
        }
    })
})
const staffReq="SELECT * from `employee` WHERE `deptid`=?";

router.get("/user/:deptid", validateToken,(req, res) => {
    const deptid = req.params.deptid; 
    db.query(staffReq,[deptid],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })


})

module.exports = router;
