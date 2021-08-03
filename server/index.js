// setting up an express server
const express = require('express');
// dependencies
const mysql = require('mysql');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'employee_system'

});

// create a request
app.post('/create',(req,res) => {

  // grab variables from frontend to backend 
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO `employee`(`name`, `age`, `country`, `position`, `wage`) VALUES (?,?,?,?,?)",
      [name,age,country,position,wage],
      (err,result) => {

        if(err) {
          console.log(err);
        } else{
          res.send("values inserted");
        }
      }
    );


});

// get 
app.get('/employees',(req,res) => {

  db.query("SELECT * FROM employee",(err,result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });


});

app.listen(process.env.PORT,()=>{
  console.log(`listening on port ${process.env.PORT}`);
})

