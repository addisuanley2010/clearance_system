const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const { validateToken } = require("../middleware/AuthMiddleware");

//this is to get all employess

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

// this is to get all employee in staff request

const staffReq="SELECT e.* FROM employee e INNER JOIN requests r ON e.empid = r.empid WHERE e.deptid=?";

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


// this is to display all  employees approved by thier header from status and employee table

const allReq="SELECT e.* FROM employee e INNER JOIN status s ON e.empid = s.empid WHERE s.header_status='Approved'";


router.get("/allReq", validateToken,(req, res) => {
    db.query(allReq,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })


})

// this is to update status table and display approved employees

const update="UPDATE `status` SET `header_status`=? WHERE empid=?"
const signitureInsert = "INSERT INTO `signature`(`empid`)  VALUES (?)"

router.put("/status",validateToken,(req,res)=>{
const {newStatus,empid}=req.body

    db.query(update,[newStatus,empid],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(newStatus==='Approved'){
               db.query(signitureInsert,[empid],(err,res)=>{
                if(err){
                    console.log(err)
                }
                
                
            })
            }
        

            res.send({success:"updated successfully"})
        }
    })
})

// to update signiture table

router.put("/signature",validateToken,(req,res)=>{
const {newStatus,empid}=req.body

    db.query(update,[newStatus,empid],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(newStatus==='Approved'){
               db.query(signitureInsert,[empid],(err,res)=>{
                if(err){
                    console.log(err)
                }
                
                
            })
            }
        

            res.send({success:"updated successfully"})
        }
    })
})




module.exports = router;
