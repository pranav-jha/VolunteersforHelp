//const express = require('express');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hackathon'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


app.get('/api/tasks', (req, res) => {
    db.query('SELECT * FROM task', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.get('/api/ngos', (req, res) => {
    db.query('SELECT * FROM ngo', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});