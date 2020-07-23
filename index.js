const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const cors = require('cors');
const connection = mysql.createConnection(dbconfig);

const app = express();
app.use(cors());
app.use(express.json());
// configuration =========================
app.set('port', process.env.PORT || 3001);


app.post('/users', function(req, res){ // /users는 모듈이름
    // var user = {
    //     id : "first",
    //     password : "second"
    // };
    console.log('왔나 ', req.body);
    connection.query('insert into users (id,password) values (?,?)', [req.body.id, req.body.password], (err, rows) => {
        if (err) throw err;
        console.log(rows);
    });
    console.log("req.body", req.body);
    res.send(req.body);
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.get('/', (req, res) => {
  res.send('Root');
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});