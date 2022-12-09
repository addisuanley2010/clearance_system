const express = require('express')
const app = express()
const cors=require('cors')

app.use(cors())
 app.use(express.json())
//app.use(bodyParser.urlencoded({extended:true}))



const registerUser = require("./routes/registerUser");
app.use("/register", registerUser);

const login = require("./routes/login");
app.use("/login", login);




app.get('/', (req, res) => {
    res.send('hello ethiopian')
})

app.listen(3002, () => {
    console.log('the server is running on port 3002')
})