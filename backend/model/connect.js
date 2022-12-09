const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clearance'
})
con.connect((err) => {
    if (err)
        console.log('not connected')
    else
        console.log("Connected!");
});

//but , this is mandatory
module.exports = con;