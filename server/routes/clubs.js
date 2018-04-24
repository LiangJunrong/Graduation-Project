var express = require('express')
var router = express.Router();

//JSLiang:加载clubs模型
var Club = require('../models/clubs');
//JSLiang：加载Users模型
var User = require('../models/users');

//新增华懒组织 -> AddOrg.vue
router.post('/addOrg', function (req, res, next) {
  if (req.body) {
    function CurrentTime() {
      var now = new Date();
      var year = now.getFullYear(); //年
      var month = now.getMonth() + 1; //月
      var day = now.getDate(); //日
      var hh = now.getHours(); //时
      var mm = now.getMinutes(); //分
      var clock = year + "-";
      if (month < 10)
        clock += "0";
      clock += month + "-";
      if (day < 10)
        clock += "0";
      clock += day + " ";
      if (hh < 10)
        clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += '0';
      clock += mm;
      return (clock);
    };
    var param = {
      clubCreatetime: CurrentTime(),
      clubCreaterId: req.cookies.userId,
      clubCreaterName: req.cookies.userName,
      clubName: req.body.clubName,
      clubDescription: req.body.clubDescription,
      clubState: "1",
      clubMenbers: [{
        userId: req.cookies.userId,
        userName: req.cookies.userName
      }]
    };
    Club.create(param, function (clubErr, clubDoc) {
      if (clubErr) {
        res.json({
          status: '1',
          msg: clubErr.message,
          result: 'Club创建华懒失败',
        });
      } else {
        User.findOne({
          _id: req.cookies.userId
        }, function (userErr, userDoc) {
          if (userErr) {
            res.json({
              status: '1',
              msg: userErr.message,
              result: '查找用户失败，无法创建'
            })
          } else {
            userDoc.userClubs.push(clubDoc);
            userDoc.save();
            res.json({
              status: '0',
              msg: '用户创建华懒成功',
              result: 'success'
            })
          }
        })
      }
    });
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
})

//搜索华懒组织 -> OrgIndex.vue
router.post('/searchClub', function (req, res, next) {
  if (req.body.clubName) {
    Club.findOne({
      clubName: req.body.clubName
    }, function (clubErr, clubDoc) {
      if (clubErr) {
        res.json({
          status: '0',
          msg: clubErr.message,
          result: '没有找到这个组织哦~'
        })
      } else {
        res.json({
          status: '1',
          msg: '有这名字的组织哦~',
          result: clubDoc
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响',
      result: 'request-error'
    })
  }
})

//加入华懒组织 -> OrgDetail.vue
router.post('/joinOrg', function (req, res, next) {
  let orgId = req.body.orgId;
  let param = {
    userId: req.cookies.userId,
    userName: req.cookies.userName
  };

  Club.findOne({
    _id: orgId
  }, function (clubErr, clubDoc) {
    if (clubErr) {
      res.json({
        status: '0',
        msg: clubErr.message,
        result: '查找华懒组织失败！'
      })
    } else {
      clubDoc.clubMenbers.push(param);
      clubDoc.save();

      User.findOne({
        _id: req.cookies.userId
      }, function (userErr, userDoc) {
        if (userErr) {
          res.json({
            status: '0',
            msg: userErr.message,
            result: '查找用户失败！'
          })
        } else {
          userDoc.userClubs.push(clubDoc);
          userDoc.save();
          res.json({
            status: '1',
            msg: '华懒添加成员成功！',
            result: 'success'
          })
        }
      })

    }
  })
})

//判断是否加入华懒 -> OrgDetail.vue
router.get('/isJoin', function (req, res, next) {
  let orgId = req.param("orgId");
  Club.findOne({
    _id: orgId
  }, function (clubErr, clubDoc) {
    if (clubErr) {
      res.json({
        status: '0',
        msg: clubErr.message,
        result: '查找华懒失败！'
      })
    } else {
      for (let i = 0; i < clubDoc.clubMenbers.length; i++) {
        if (clubDoc.clubMenbers[i].userId == req.cookies.userId) {
          res.json({
            stauts: '1',
            msg: '存在该成员！',
            result: 'success'
          })
        }
      }
    }
  })
})

//获取全部华懒 -> OrgIndex.vue
router.get('/', function (req, res, next) {
  let page = parseInt(req.param("page")); //当前第几页
  let pageSize = parseInt(req.param("pageSize")); //当前页给的数据
  let skip = (page - 1) * pageSize; //分页公式

  Club.find({

  }).sort({
    '_id': -1
  }).skip(skip).limit(pageSize).exec(function (clubErr, clubDoc) {
    if (clubErr) {
      res.json({
        states: '1',
        msg: clubErr.message
      });
    } else {
      res.json({
        status: '0',
        msg: '读取华懒成功',
        result: clubDoc
      })
    }
  })
});

//获取单个华懒详情 -> OrgDetail.vue、MenberList.vue、MyOrgIndex.vue
router.get('/getOrgDetail', function (req, res, next) {
  let orgId = req.param("orgId");
  Club.findOne({
    _id: orgId
  }, function (err, clubDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: clubDoc
      })
    }
  })
})

//退出华懒 -> MenberList.vue
router.post("/quitOrg", function (req, res, next) {
  if (req.body.orgId) {
    Club.findOne({
      _id: req.body.orgId
    }, function(clubErr, clubDoc){
      if(clubErr){
        return res.json({
          status: '0',
          msg: clubErr.message,
          result: 'error'
        })
      } else {
        let quiterId = ''
        for(let i=0; i<clubDoc.clubMenbers.length; i++){
          if(clubDoc.clubMenbers[i].userId == req.cookies.userId){
            quiterId = clubDoc.clubMenbers[i]._id;
          }
        }
        clubDoc.clubMenbers.remove({
          _id: quiterId
        })
        clubDoc.save();

        User.update({
          _id: req.cookies.userId
        }, {
          $pull: {
            'userClubs': {
              '_id': req.body.orgId
            }
          }
        }, function (userQuitErr, userQuitDoc) {
          if(userQuitErr){
            return res.json({
              status: '0',
              msg: userQuitErr.message,
              result: 'error'
            })
          } else {
            return res.json({
              status: '1',
              msg: '退出成功',
              result: 'success'
            })
          }
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响',
      result: 'request-error'
    })
  }
})

//新增华懒话题 -> AddTopic.vue
router.post('/addTopic', function (req, res, next) {
  if (req.body.topicTitle && req.body.topicContent && req.body.clubName) {
    function CurrentTime() {
      var now = new Date();
      var month = now.getMonth() + 1; //月
      var day = now.getDate(); //日
      var hh = now.getHours(); //时
      var mm = now.getMinutes(); //分
      var clock = '';
      if (month < 10)
        clock += "0";
      clock += month + "-";
      if (day < 10)
        clock += "0";
      clock += day + " ";
      if (hh < 10)
        clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += '0';
      clock += mm;
      return (clock);
    };
    var param = {
      topicCreatetime: CurrentTime(),
      topicCreaterId: req.cookies.userId,
      topicCreaterName: req.cookies.userName,
      topicTitle: req.body.topicTitle,
      topicContent: req.body.topicContent,
      topicState: "1"
    };
    Club.findOne({
      clubName: req.body.clubName
    }, function (clubErr, clubDoc) {
      if (clubErr) {
        res.json({
          status: '1',
          err: clubErr.message,
          result: '查找社团失败！'
        })
      } else {
        clubDoc.clubTopics.push(param);
        clubDoc.save();

        User.findOne({
          _id: req.cookies.userId
        }, function (userErr, userDoc) {
          if (userErr) {
            res.json({
              status: '1',
              msg: userErr.message,
              result: '查找人物失败！'
            })
          } else {
            // var newParam = {
            //   orgId: clubDoc._id
            // }
            // var clubParam = clubDoc.clubTopics.pop();
            // userDoc.userTopics.push(clubParam.push(newParam));
            userDoc.userTopics.push(clubDoc.clubTopics.pop());
            userDoc.save();
            res.json({
              status: '0',
              err: '创建话题成功！',
              result: 'success'
            })
          }
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
})

//点赞华懒话题 -> OrgDetail.vue、MyOrgIndex.vue、TopicComment.vue
router.post('/addTopicLike', function (req, res, next) {
  if (req.body.orgId && req.body.topicId) {
    let orgId = req.body.orgId;
    let topicId = req.body.topicId;
    let param = {
      userId: req.cookies.userId,
      userName: req.cookies.userName
    };

    Club.findOne({
      _id: orgId
    }, function (clubErr, clubDoc) {
      if (clubErr) {
        res.json({
          status: '0',
          msg: clubErr.message,
          result: '查找华懒组织失败！'
        })
      } else {
        for (let i = 0; i < clubDoc.clubTopics.length; i++) {
          if (clubDoc.clubTopics[i]._id == topicId) {
            for (let j = 0; j < clubDoc.clubTopics[i].topicLike.length; j++) {
              if (clubDoc.clubTopics[i].topicLike[j].userId == req.cookies.userId) {
                return res.json({
                  status: '0',
                  msg: '点赞失败！',
                  result: '点过赞了哦~'
                })
                break;
              }
            }

            clubDoc.clubTopics[i].topicLike.push(param);
            clubDoc.save();
            res.json({
              status: '1',
              msg: '华懒话题点赞成功！',
              result: 'success'
            })

          }
        }
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
})

//获取评论信息 -> TopicComment.vue
router.get('/getTopicComment', function (req, res, next) {
  if (req.param("orgId") && req.param("topicId")) {
    let orgId = req.param("orgId");
    let topicId = req.param("topicId");
    Club.findOne({
      _id: orgId,
    }, function (clubErr, clubDoc) {
      if (clubErr) {
        res.json({
          status: '1',
          msg: clubErr.message,
          result: '查找该社团失败！'
        })
      } else {
        for (let i = 0; i < clubDoc.clubTopics.length; i++) {
          if (clubDoc.clubTopics[i]._id == topicId) {
            res.json({
              status: '0',
              msg: "查找该话题成功！",
              result: clubDoc.clubTopics[i]
            })
          }
        }
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
})

//创建话题评论 -> TopicComment.vue
router.post('/addTopicComment', function (req, res, next) {
  function CurrentTime() {
    var now = new Date();
    var month = now.getMonth() + 1; //月
    var day = now.getDate(); //日
    var hh = now.getHours(); //时
    var mm = now.getMinutes(); //分
    var clock = '';
    if (month < 10)
      clock += "0";
    clock += month + "-";
    if (day < 10)
      clock += "0";
    clock += day + " ";
    if (hh < 10)
      clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return (clock);
  };
  let topicId = req.body.topicId;
  Club.findOne({
    "clubTopics._id": topicId
  }, function (clubErr, clubDoc) {
    if (clubErr) {
      res.json({
        status: '1',
        msg: clubErr.message,
        result: '查找该社团失败！'
      })
    } else {
      for (let i = 0; i < clubDoc.clubTopics.length; i++) {
        if (clubDoc.clubTopics[i]._id == topicId) {
          let topicComment = {
            commentatorId: req.cookies.userId,
            commentatorName: req.cookies.userName,
            commentCreatetime: CurrentTime(),
            commentText: req.body.commentText,
            commentState: "1"
          }
          clubDoc.clubTopics[i].topicComment.push(topicComment);
          clubDoc.save();
          res.json({
            status: '0',
            msg: '创建话题评论成功！',
            result: 'success'
          })
        }
      }
    }
  })
})

module.exports = router;
