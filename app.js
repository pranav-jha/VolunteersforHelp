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
    db.query('SELECT * FROM tasks', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.get('/api/ngotasks/:_id', (req, res) => {
    var id = req.params._id;
    db.query(`SELECT * FROM tasks where nid = ${id}`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.get('/api/tasks/:_id', (req, res) => {
    var id = req.params._id;
    db.query(`SELECT * FROM tasks where tid = ${id}`, (err, rows, fields) => {
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

app.post('/api/ngos', (req, res) => {
    var data1 = req.body;
    let sql = `INSERT INTO ngo SET name="${data1.name}",shortd="${data1.shortd}",about="${data1.about}",nloc="${data1.nloc}",pic="${data1.pic}",nphno=${data1.nphno}; `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post added...');
    });
});
app.get('/api/ngos/:_id', (req, res) => {
    var id = req.params._id;
    db.query(`SELECT * FROM ngo where nid = ${id}`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



app.listen('3000', () => {
    console.log('Server started on port 3000');
});