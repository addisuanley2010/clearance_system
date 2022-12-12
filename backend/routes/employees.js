const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const { validateToken } = require("../middleware/AuthMiddleware");

const userData= "SELECT * FROM `newEmployee`"

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



module.exports = router;
