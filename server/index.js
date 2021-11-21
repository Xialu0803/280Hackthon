const express = require('express');
const mysql = require('mysql');

const app = express();

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hackzhon-gdp'
});

//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');

});

//getGDP
app.get('/getgdps', (req, res) => {
    console.log(`Received get_records request ${req}`);
    let s1 = 'India';
    let sql = 'SELECT ' + s1 + ' FROM gdp';
    const result = [];
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            for (let i = 0; i < results.length; i++) {
                result[i] = results[i][s1];
            }
            res.send(result);
            //var rows = JSON.parse(JSON.stringify(result[0]));
        }
    })
});

app.listen('3000', () => {
    console.log('Sever started on port 3000');
});