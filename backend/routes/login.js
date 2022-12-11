const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");


router.get('/', validateToken, (req, res) => {
    res.json(req.user)
})

router.post('/', async (req, res) => {
    const { username, password } = req.body
    const data = await ("SELECT * FROM `newEmployee` WHERE `username`=?")
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
                        id: result[0].empId,
                        username: result[0].username,
                        email: result[0].email,
                        phone: result[0].phone,
                        designation: result[0].designation,
                        campus:result[0].campus



                    }, "importantsecret");

                    res.json({ accessToken: accessToken, 
                    roll:result[0].designation ,
                     success:"successfully logged in"})
                }
            })

        }
    })

})


module.exports = router;