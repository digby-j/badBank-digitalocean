var express = require('express');
var app = express();
var cors = require('cors');

// used to server static files from public direcotry
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name:       req.params.name,
        email:      req.params.email,
        password:   req.params.password
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
    res.send({
        name:   'Jake',
        email:  'developer@jakedigby.com',
        password: 'secret1'
    })
})

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);