
var express = require('express');
var bcrypt = require('bcryptjs');

var app = express();
var PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 

app.post('/', async (req, res)=>{
    var {name, password} = req.body;
    let pwd = await bcrypt.hash(password, 12);
    res.send({ password: pwd });
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});