var express = require('express');
var router = express.Router();

//JSLiang：加载加密模块
var crypto = require('crypto');

//JSLiang：加载user模型
var User = require('./../models/users');

//JSLiang：检测用户名 -> Register.vue
router.post('/checkUser', function (req, res, next) {
  User.findOne({
    userName: req.body.userName
  }, function (userErr, userDoc) {
    if (userDoc) {
      return res.json({
        status: '0',
        msg: '存在用户名称',
        result: '有这用户了哦~'
      })
    } else {
      return res.json({
        status: '1',
        msg: '不存在用户名称',
        result: '该昵称可以使用~'
      })
    }
  })
})

//JSLiang：注册 ->Register.vue
router.post('/register', function (req, res, next) {
  if (req.body) {
    //时间函数
    function CurrentTime() {
      var now = new Date();

      var year = now.getFullYear(); //年
      var month = now.getMonth() + 1; //月
      var day = now.getDate(); //日

      var hh = now.getHours(); //时
      var mm = now.getMinutes(); //分

      var clock = year + "-";
      // var clock = '';

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

    //验证用户名是否存在
    let userName = req.body.name;
    User.findOne({
      userName: userName
    }, function (userErr, userDoc) {
      if (userDoc) {
        return res.json({
          status: '1',
          msg: '查有此人，不可注册',
          result: 'user-error'
        })
      } else {
        if (userName != '') {
          //验证两次密码是否相同并加密密码
          let userPassword = req.body.pass;
          let userCheckPassword = req.body.checkPass;
          if (userPassword == userCheckPassword && userPassword != '') {
            //生成口令的散列值
            let md5 = crypto.createHash('md5'); //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
            let password = md5.update(userPassword).digest('hex'); //加密后的密码

            //判断完用户名和密码，开始注册
            let param = {
              userCreatetime: CurrentTime(),
              userName: userName,
              userPassword: password,
              userHostelArea: req.body.hostelArea,
              userHostelAddress: req.body.hostelAddress,
              userSex: req.body.sex,
              userQQ: req.body.qq,
              userState: "1"
            };
            User.create(param);
            return res.json({
              status: "1",
              msg: '创建用户成功！',
              result: 'success'
            });
          } else {
            return res.json({
              status: '0',
              msg: '密码不一致！',
              result: 'password-error'
            });
          }
        }
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'error'
    })
  }
})

//JSLiang：登录 ->Login.vue
router.post("/login", function (req, res, next) {
  if (req.body) {
    let userPassword = req.body.pass;
    //生成口令的散列值
    let md5 = crypto.createHash('md5'); //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    let password = md5.update(userPassword).digest('hex'); //加密后的密码
    var param = {
      userName: req.body.name,
      userPassword: password
    };
    User.findOne(param, function (err, doc) {
      if (doc) {
        res.cookie("userId", doc._id, {
          path: '/',
          //1000*60*60=1小时
          maxAge: 24000 * 60 * 60
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 24000 * 60 * 60
        });
        //学习如何使用mongoose的session
        //req.session.user = doc;
        return res.json({
          status: '0',
          msg: '登录成功~',
          result: 'success'
        })
      } else {
        return res.json({
          status: "1",
          msg: '用户名或者密码验证失败了哦~',
          result: 'userName or userPassword error'
        });
      }
    });
  } else {
    return res.json({
      status: '0',
      msg: '拒绝你请求~',
      result: 'login-error'
    })
  }
});

//JSLiang：根据cookies的userId读取用户信息 -> OrgIndex.vue、ChangeUserPassword.vue
router.get('/', function (req, res, next) {
  if (req.cookies.userId && req.cookies.userName) {
    User.findOne({
      _id: req.cookies.userId
    }, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message
        })
      } else {
        res.json({
          status: '0',
          msg: '读取用户集合成功',
          result: doc
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
});

//JSLiang：获取用户社团 -> AddTopic.vue
router.get("/getMyOrg", function (req, res, next) {
  let userId = req.cookies.userId;
  User.findOne({
    _id: userId
  }, function (err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: '没有找到该用户'
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: userDoc.userClubs
      })
    }
  })
})

//JSLiang：根据传入的userId查询用户信息 -> ContactsDetail.vue、contactsConent.vue
router.get('/getUserInfo', function (req, res, next) {
  let userId = req.param("userId");
  User.findOne({
    _id: userId
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '读取用户集合成功',
        result: doc
      })
    }
  })
})

//JSLiang：注销 -> UserIndex.vue
router.post("/logout", function (req, res, next) {
  res.cookie("userId", "", {
    path: "/",
    maxAge: -1
  });
  res.cookie("userName", "", {
    path: "/",
    maxAge: -1
  });
  res.json({
    status: "0",
    msg: '',
    result: ''
  });
});

//JSLiang：修改用户信息 -> ChangeUserInfo.vue
router.post("/changeUserInfo", function (req, res, next) {
  //需要获得的参数有：用户id、昵称、楼区、宿舍号、性别、QQ
  let userId = req.cookies.userId,
    userName = req.body.userName,
    userHostelArea = req.body.userHostelArea,
    userHostelAddress = req.body.userHostelAddress,
    userSex = req.body.userSex,
    userQQ = req.body.userQQ;
  User.update({
    //联合查询："userId":userId,"cartList.productId":productId
    "_id": userId
  }, {
    //如果更新的是数组下数据："cartList.$.productNum":productNum
    "userName": userName,
    'userHostelArea': userHostelArea,
    'userHostelAddress': userHostelAddress,
    'userSex': userSex,
    'userQQ': userQQ
  }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: '更新用户信息失败:' + err.message,
        result: ''
      });
    } else {
      res.cookie("userName", userName, {
        path: '/',
        maxAge: 10000 * 60 * 60
      });
      res.json({
        status: '0',
        msg: '更新用户信息成功:',
        result: 'success'
      })
    }
  })
})

//JSLiang：修改用户密码 -> ChangeUserPassword.vue
router.post("/changeUserPassword", function (req, res, next) {
  if (req.body.userPassword && req.body.userCheckNewPass) {
    if (req.body.userPassword == req.body.userCheckNewPass) {
      //生成口令的散列值
      let md5 = crypto.createHash('md5'); //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
      let password = md5.update(req.body.userPassword).digest('hex'); //加密后的密码
      User.update({
        "_id": req.cookies.userId
      }, {
        "userPassword": password
      }, function(userErr, userDoc){
        if(userErr){
          return res.json({
            status:"0",
            msg: userErr.message,
            result: "修改密码失败！"
          })
        } else {
          return res.json({
            status: '1',
            msg: '修改密码成功！',
            result: 'success'
          })
        }
      })
    } else {
      return res.json({
        status: '0',
        msg: '两次密码不一致',
        result: 'error'
      })
    }
  } else {
    return res.json({
      status: "0",
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
})

//回复信息 -> ContactsContent.vue
router.post("/reply", function (req, res, next) {
  let friendId = req.body.userId;
  let friendName = req.body.userName;
  let isComplete = true;

  //用户发第2、3、4……条信息
  let userReply = {
    createtime: CurrentTime(),
    createrId: req.cookies.userId,
    createrName: req.cookies.userName,
    content: req.body.content,
    state: "1"
  }

  //用户发第2、3、4……条信息存到朋友信息上
  let friendReply = {
    createtime: CurrentTime(),
    createrId: req.cookies.userId,
    createrName: req.cookies.userName,
    content: req.body.content,
    state: "2"
  }

  //用户发第1条信息
  let newUserReply = {
    userId: friendId,
    userName: friendName,
    chatContent: [{
      createtime: CurrentTime(),
      createrId: req.cookies.userId,
      createrName: req.cookies.userName,
      content: req.body.content,
      state: "1"
    }]
  }

  //用户的第一条信息存在朋友信息上
  let newFriendReply = {
    userId: req.cookies.userId,
    userName: req.cookies.userName,
    chatContent: [{
      createtime: CurrentTime(),
      createrId: req.cookies.userId,
      createrName: req.cookies.userName,
      content: req.body.content,
      state: "2"
    }]
  }

  //时间函数
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

  //查找该用户信息
  User.findOne({
    _id: req.cookies.userId
  }, function (userErr, userDoc) {
    if (userErr) {
      res.json({
        status: '0',
        msg: userErr.message,
        result: '没找到自己的信息！'
      })
    } else {
      //用户聊天记录循环判断：如果用户聊天中已经存在该朋友id，则在该id下的chatContent中添加userReply
      for (let i = 0; i < userDoc.userContacts.length; i++) {
        if (userDoc.userContacts[i].userId == friendId) {
          userDoc.userContacts[i].chatContent.push(userReply);
          userDoc.save();

          //这种情况下，判断朋友聊天记录怎么添加（2种情况）
          User.findOne({
            _id: friendId
          }, function (friendErr1, friendDoc1) {
            if (friendErr1) {
              return res.json({
                status: '0',
                msg: friendErr1.message,
                result: '没找到朋友的信息！'
              })
            } else {
              //朋友聊天记录循环判断1：如果朋友聊天中已经存在该朋友id，则在该id下的chatContent中添加friendReply
              for (let j = 0; j < friendDoc1.userContacts.length; j++) {
                if (friendDoc1.userContacts[j].userId == req.cookies.userId) {
                  friendDoc1.userContacts[j].chatContent.push(friendReply);
                  friendDoc1.save();
                  return res.json({
                    status: '1',
                    msg: '回复成功了哦~',
                    result: 'success'
                  });
                  break;
                }
              }
              //朋友聊天记录循环判断2：否则添加newFriendReply
              friendDoc1.userContacts.push(newFriendReply);
              friendDoc1.save();
              return res.json({
                status: '1',
                msg: '回复成功了哦~',
                result: 'success'
              });
            }
          })

          //由于for查找到数据后没有终止后面的程序的意思，会导致重复添加了一次。
          //所以添加个isComplete来判断是否执行后面的代码
          isComplete = false;
        }
      }

      //如果没有执行for->if里面的代码，那么isComplete就是true
      if (isComplete) {
        //用户聊天记录循环判断：否则添加newUserReply
        userDoc.userContacts.push(newUserReply);
        userDoc.save();

        //这种情况下，再判断朋友聊天记录怎么添加（2种情况）
        User.findOne({
          _id: friendId
        }, function (friendErr2, friendDoc2) {
          if (friendErr2) {
            return res.json({
              status: '0',
              msg: friendErr2.message,
              result: '没找到朋友的信息！'
            })
          } else {
            //朋友聊天记录循环判断1：如果朋友聊天中已经存在该朋友id，则在该id下的chatContent中添加friendReply
            for (let k = 0; k < friendDoc2.userContacts.length; k++) {
              if (friendDoc2.userContacts[k].userId == req.cookies.userId) {
                friendDoc2.userContacts[k].chatContent.push(friendReply);
                friendDoc2.save();
                return res.json({
                  status: '1',
                  msg: '回复成功了哦~',
                  result: 'success'
                });
                break;
              }
            }
            //朋友聊天记录循环判断2：否则添加newFriendReply
            friendDoc2.userContacts.push(newFriendReply);
            friendDoc2.save();
            return res.json({
              status: '1',
              msg: '回复成功了哦~',
              result: 'success'
            })
          }
        })

      }

    }
  })
})

//获取当前朋友的聊天信息 -> ContactsContent.vue
router.get("/getChatInfo", function (req, res, next) {
  let friendId = req.param("userId");
  User.findOne({
    _id: req.cookies.userId
  }, function (userErr, userDoc) {
    if (userErr) {
      res.json({
        status: '0',
        msg: userErr.message,
        result: '没有查询到自己的资料哦~'
      })
    } else {
      for (let i = 0; i < userDoc.userContacts.length; i++) {
        if (userDoc.userContacts[i].userId == friendId) {
          res.json({
            status: '1',
            msg: '找到了当前朋友的聊天信息哦~',
            result: userDoc.userContacts[i]
          })
        }
      }
    }
  })
})

//获取所有朋友的聊天信息 -> ContactsIndex.vue
router.get("/getContactsInfo", function (req, res, next) {
  let userContactsInfo = []
  User.findOne({
    _id: req.cookies.userId
  }, function (userErr, userDoc) {
    if (userErr) {
      res.json({
        status: '0',
        msg: userErr.message,
        result: '没找到登录用户！'
      })
    } else {
      for (let i = 0; i < userDoc.userContacts.length; i++) {
        let userId = userDoc.userContacts[i].userId;
        let userName = userDoc.userContacts[i].userName;
        let unreadMessages = 0;
        for (let j = 0; j < userDoc.userContacts[i].chatContent.length; j++) {
          if (userDoc.userContacts[i].chatContent[j].state == "2") {
            unreadMessages++;
          }
        }
        userContactsInfo[i] = {
          userId: userId,
          userName: userName,
          unreadMessages: unreadMessages
        }
      }
      res.json({
        status: '1',
        msg: '查找到聊天资料了哦~',
        result: userContactsInfo
      })
    }
  })
})

//获取所有未读消息条数 -> MyOrgIndex.vue
router.get("/getAllUnreadMessages", function (req, res, next) {
  let unreadMessages = 0;
  User.findOne({
    _id: req.cookies.userId
  }, function (userErr, userDoc) {
    if (userErr) {
      res.json({
        status: '0',
        msg: userErr.message,
        result: '查找登录的用户失败！'
      })
    } else {
      for (let i = 0; i < userDoc.userContacts.length; i++) {
        for (let j = 0; j < userDoc.userContacts[i].chatContent.length; j++) {
          if (userDoc.userContacts[i].chatContent[j].state == "2") {
            unreadMessages++;
          }
        }
      }
      res.json({
        status: '1',
        msg: '查询用户未读信息数量成功！',
        result: unreadMessages
      })
    }
  })
})

//标记某用户未读信息为已读 -> ContactsIndex.vue
router.post("/newsIsRead", function (req, res, next) {
  User.findOne({
    _id: req.cookies.userId
  }, function (userErr, userDoc) {
    if (userErr) {
      res.json({
        status: '0',
        msg: userErr.message,
        result: '查找登录的用户信息失败！'
      })
    } else {
      for (let i = 0; i < userDoc.userContacts.length; i++) {
        if (userDoc.userContacts[i].userId == req.body.userId) {
          for (let j = 0; j < userDoc.userContacts[i].chatContent.length; j++) {
            userDoc.userContacts[i].chatContent[j].state = "1";
            userDoc.save();
          }
        }
      }
      res.json({
        status: '1',
        msg: '标记信息为已读成功！',
        result: 'success'
      })
    }
  })
})

module.exports = router;
