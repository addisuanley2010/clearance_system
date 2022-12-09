const express = require("express");
const router = express.Router();
const db = require('../model/connect')
 const bcrypt = require('bcrypt');
 
 router.get('/', (req, res) => {
    res.send('hello router')
})

router.post('/', (req, res) => {

    const { username, email, password, phone,designation,campus } = req.body
   
    const checkUser = "SELECT `username` FROM `newEmployee` WHERE `username` =?";
    const sqlInsert = "INSERT INTO `newEmployee` (`username`, `email`, `phone`, `designation`,`campus`,`password`) VALUES (?,?,?,?,?,?)"


    db.query(checkUser, [username], (err, result) => {
        if (err) {
            res.send({ error: 'error happened!' })
        }
        else if (result.length > 0) {
            res.send({ error: 'username already existed!' })
        }
        else {
       
                bcrypt.hash(password, 10).then((hashedPassword) => {
                    db.query(sqlInsert, [username, email, phone, designation,campus,hashedPassword], (err, result) => {
                        if (err)
                            res.send({ error: 'register failed!' })
                        else
                            res.send({ success: 'Registerd successfully!! ' })
                    })
        });

            
        }

    })

})


module.exports = router;