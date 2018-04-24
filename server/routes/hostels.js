var express = require('express');
var router = express.Router();

//JSLiang：加载dormitory模型
var Hostel = require('../models/hostels');

//JSLiang：查询全部宿舍
router.get("/", function (req, res, next) {
  Hostel.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '0',
        msg: err.message,
        result: "展示所有宿舍失败！"
      });
    } else {
      res.json({
        status: '1',
        msg: '读取宿舍集合成功',
        result: doc
      })
    }
  })
});

//JSLiang：往宿舍添加成员名
router.post("/register", function (req, res, next) {
  Hostel.find({}, function (hostelErr, hostelDoc) {
    if (hostelErr) {
      return res.json({
        status: '0',
        msg: hostelErr.message,
        result: '没查询到宿舍集合！'
      })
    } else {
      for (let i = 0; i < hostelDoc.length; i++) {
        for (let j = 0; j < hostelDoc[i].hostelArea.length; j++) {
          if (hostelDoc[i].hostelArea[j].hostelName == req.body.hostelArea) {
            hostelDoc[i].hostelArea[j].hostelStudents.push(req.body.name);
            hostelDoc[i].save();
            return res.json({
              status: '1',
              msg: '宿舍楼添加成员',
              result: 'success'
            })
          }
        }
      }
    }
  })
})

module.exports = router;
