const express = require('express');
const mysql = require('mysql');

const app = express();

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '836353',
    database: '280hackathon'
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');

});

//getGDP
app.get('/getgdps', (req, res) => {
    let sql = 'SELECT * FROM gdp';
    let query = db.query(sql, (err, results) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(results));
        }
    })
});

app.listen('3000', () => {
    console.log('Sever started on port 3000');
});