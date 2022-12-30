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

// this is to get staff req

const staffReq="SELECT e.* FROM employee e INNER JOIN requests r ON e.empid = r.empid WHERE e.deptid=?";
;



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

// const update="UPDATE `status` SET `header_status`=? WHERE empid=?"
const update="UPDATE `status` SET `header_status`=? WHERE empid=?"

router.put("/status",validateToken,(req,res)=>{
    const {newStatus,empid}=req.body
console.log(newStatus,empid)
    db.query(update,[newStatus,empid],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({success:"updated successfully"})
        }
    })
})




module.exports = router;
