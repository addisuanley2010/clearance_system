const express = require("express");
const router = express.Router();
const db = require('../model/connect')

router.post('/', async (req, res) => {

    const { empid, reason, date } = req.body

    const sqlInsert = await "INSERT INTO `requests`(`empid`, `date_of_request`, `reason_of_request`)  VALUES (?,?,?)"
    const statusInsert = "INSERT INTO `status`(`empid`)  VALUES (?)"

    await db.query(sqlInsert, [empid, date, reason], (err, result) => {
        if (err) {
            res.send({ error: 'error happened!' })
        }
        else {
            db.query(statusInsert,[empid],(err,res)=>{
                if(err){
                    console.log(err)
                }
                
                
            })
            res.send("successfully finished!")
        }



    })

})


module.exports = router;