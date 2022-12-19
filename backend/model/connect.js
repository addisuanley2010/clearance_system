const mysql = require('mysql2')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    port:'3360',
    database: 'clearance_system'
}) 
con.connect((err) => {
    if (err)
        console.log(err)
    else
        console.log("Connected!");
});

//but , this is mandatory 
module.exports = con;