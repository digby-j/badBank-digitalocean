var express = require('express');
var app = express();
var cors = require('cors');
var dal = require("./dal.js");

// used to server static files from public direcotry
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});

// Deposit
app.get('/account/deposit/:email/:amount', function (req, res) {
    res.send({
        email:      req.params.email,
        amount:   req.params.deposit
    });
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
})


var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);