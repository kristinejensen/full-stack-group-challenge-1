var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/routes.js');
app.use('/routes', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));


//
// app.use('/colors', colorRouter);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
