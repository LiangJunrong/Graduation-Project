var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
//JSLiang：加载商品路由
var goods = require('./routes/goods');
//JSLiang:加载宿舍路由
var hostels = require('./routes/hostels');
//JSLiang:加载华懒路由
var clubs = require('./routes/clubs');

var app = express();

//Vue路由转换
var history = require('connect-history-api-fallback');
//var app = express();
app.use(history({
  rewrites: [{
    from: /^\/abc$/,
    to: '/'
  }]
}));
//Vue路由转化结束

//JSLiang：设置引擎为ejs，默认文件为.html结尾
var ejs = require('ejs')
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express)
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
//部署到服务器的时候，把public改为views
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', index);
app.use('/users', users);
//JSLiang：定义商品路由路径
app.use('/goods', goods);
//JSLiang:定义宿舍路由路径
app.use('/hostels', hostels);
//JSLiang:定义华懒路由路径
app.use('/clubs', clubs);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
