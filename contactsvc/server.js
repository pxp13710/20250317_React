var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.enable("jsonp callback");
app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
});

app.set('port', (process.env.PORT || 8000));

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const requestIp = require('request-ip');
app.use(requestIp.mw())

var server = app.listen(app.get('port'), function () {
  console.log("연락처 서비스가 " + app.get('port') + "번 포트에서 시작되었습니다!");
});

var router = require('./routes')(app);
