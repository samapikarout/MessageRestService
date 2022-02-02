var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var msgCntrl = require('./api/controllers/message.controller');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})
app.listen(9001, () => {
    console.log('RSBCIHIWebHookApi app listening on port 9001!')
});
//For logs
app.get('/readMessage', msgCntrl.message);