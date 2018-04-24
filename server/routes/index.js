var express = require('express');
var router = express.Router();

//加载mongoose
var mongoose = require('mongoose');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/graduation');

//连接成功
mongoose.connection.on("connected", function () {
  console.log("MongoDB 连接成功！");
});
//连接失败
mongoose.connection.on("error", function () {
  console.log("MongoDB 连接失败！");
});
//连接断开
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB 连接断开！");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JSLiang Express' });
});

module.exports = router;
