const express = require("express");
const router = express.Router();
const db = require('../model/connect')
 const bcrypt = require('bcrypt');
 
 router.get('/', (req, res) => {
    res.send('hello router')
})

router.post('/', (req, res) => {

    const { username, email, password, phone,fname,lname,campus ,mname} = req.body
  
    const checkUser = "SELECT `empid` FROM `employee` WHERE `empid` =?";
    const sqlInsert = "INSERT INTO `employee`(`empid`, `fname`, `mname`, `lname`, `email`, `password`, `phone`,  `campus`) VALUES (?,?,?,?,?,?,?,?)"

    db.query(checkUser, [username], (err, result) => {
        if (err) {
            res.send({ error: 'error happened!' })
        }
        else if (result.length > 0) {
            res.send({ error: 'username already existed!' })
        }
        else {
    
                bcrypt.hash(password, 10).then((hashedPassword) => {
                    db.query(sqlInsert, [username,fname,mname,lname,email,hashedPassword,phone ,campus], (err, result) => {
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