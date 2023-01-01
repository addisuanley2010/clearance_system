const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");



router.get('/', validateToken, async(req, res) => {
    const check = "SELECT * FROM `requests` WHERE `empid` =?";
    const checkWait = "SELECT * FROM `status` WHERE `empid` =? AND `header_status`=?";

   await db.query(check, [req.user.username], (err, result) => {
        if (err) {
            res.send("err happend")
        }
        else if (result.length > 0) {

            db.query(checkWait, [req.user.username, "approved"], (err, result) => {
                if (err) {
                    res.send("wait error happened")
                }
                else if (result.length > 0) {
                    req.user.wait = true
                     req.user.present = true
                    res.json(req.user)
                }
                else {
                    req.user.present = true
                    req.user.wait = false

                    res.send(req.user)

                }


            })
           
        }
        else {
            req.user.present = false
            req.user.wait=false
            res.send(req.user)

        }


    })


})

router.post('/', (req, res) => {
    const { username, password } = req.body
    const data = ("SELECT * FROM `employee` WHERE `empid`=?")
    db.query(data, [username], (err, result) => {
        if (err) {
            res.send({ error: "Failed!" })
        }

        else if (result == '') {
            res.send({
                error: "user not found!"
            })
        }
        else {
            bcrypt.compare(password, result[0].password).then((match) => {
                if (!match) {
                    res.send({
                        error: "wrong username passoword combination!"
                    })
                }
                else {
                    const accessToken = sign({
                        username: result[0].empid,
                        email: result[0].email,
                        phone: result[0].phone,
                        designation: result[0].designation,
                        campus: result[0].campus,
                        fname: result[0].fname,
                        lname: result[0].lname,
                        mname: result[0].mname,
                        deptid: result[0].deptid,
                    }, "importantsecret");

                    res.json({
                        accessToken: accessToken,
                        success: "successfully logged in"
                    })
                }
            })

        }
    })

})


module.exports = router;
