var express = require('express');
var router = express.Router();

var Goods = require('../models/goods');
var User = require("../models/users");

//新增商品 -> AddNewGoods.vue
router.post("/addNewGoods", function (req, res, next) {
  if (req.body) {
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
    Goods.create({
      goodsName: req.body.goodsName,
      goodsDescription: req.body.goodsDescription,
      goodsPrice: req.body.goodsPrice,
      goodsCreatetime: CurrentTime(),
      goodsCreaterId: req.cookies.userId,
      goodsCreaterName: req.cookies.userName,
      goodsState: '1',
      goodsImage: 'newgoods.jpg'
    }, function (goodsErr, goodsDoc) {
      if (goodsErr) {
        res.json({
          status: '1',
          msg: goodsErr.message,
          result: '创建商品失败'
        })
      } else {
        User.findOne({
          _id: req.cookies.userId
        }, function (userErr, userDoc) {
          if (userErr) {
            res.json({
              status: '1',
              msg: userErr.message,
              result: '寻找用户失败'
            })
          } else {
            userDoc.userGoods.push(goodsDoc);
            userDoc.save();
            res.json({
              status: '0',
              msg: '',
              result: 'success'
            })
          }
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响哦~',
      resulst: 'request-error'
    })
  }
})

//查询商品列表 -> MktIndex.vue
router.get("/", function (req, res, next) {
  if (req.param) {
    //分页
    let page = parseInt(req.param("page")); //当前第几页
    let pageSize = parseInt(req.param("pageSize")); //当前页给的数据
    let skip = (page - 1) * pageSize; //分页公式

    //排序
    let params = {}; //obj
    let sort = req.param("sort"); //param是get形式的获取
    let sortDefault = req.param("sortDefault");

    //刷选价格
    let priceLevel = req.param("priceLevel");
    let priceGt = '',
      priceLte = '';
    if (priceLevel != 'all') {
      switch (priceLevel) {
        case '0':
          priceGt = 0;
          priceLte = 100;
          break;
        case '1':
          priceGt = 100;
          priceLte = 500;
          break;
        case '2':
          priceGt = 500;
          priceLte = 1000;
          break;
        case '3':
          priceGt = 1000;
          priceLte = 5000;
          break;
      }
      params = {
        goodsPrice: {
          $gt: priceGt,
          $lte: priceLte
        }
      }
    }

    let goodsModel = Goods.find(params).skip(skip).limit(pageSize); //按params规则查找goods表;skip()跳过几条数据;limit()限制获取几条数据
    //如果sortDefault为1则使用id排序
    if (sortDefault == 1) {
      goodsModel.sort({
        '_id': -1
      });
    } else { //否则用价格排序
      goodsModel.sort({
        'goodsPrice': sort
      });
    }

    goodsModel.exec(function (err, doc) {
      if (err) {
        return res.json({
          states: '1',
          msg: err.message
        });
      } else {
        return res.json({
          states: '0',
          msg: '',
          result: {
            count: doc.length,
            list: doc
          }
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '没有参数哦~',
      result: 'request-error'
    })
  }
});

//添加到收藏栏 -> MktIndex.vue、GoodDetail.vue
router.post("/addCollection", function (req, res, next) {
  //规则：点击收藏的时候，先判断这个商品中，是否存有这个人，没有则保存，并把该商品的一些数据传到这个人的收藏域中
  if (req.cookies.userId && req.cookies.userName) {
    //获取前端传过来的商品的_id
    let goodsId = req.body.goodsId;

    User.findOne({
      //通过查找该用户
      _id: req.cookies.userId
    }, function (userErr, userDoc) { //回调
      //报错
      if (userErr) {
        return res.json({
          status: "1",
          msg: userErr.message,
          result: '没找到该用户！'
        })
      } else {
        //如果存在该用户
        if (userDoc) {
          //查找_id
          Goods.findOne({
            _id: goodsId
          }, function (goodsErr, goodsDoc) {
            //报错
            if (goodsErr) {
              return res.json({
                status: "1",
                msg: goodsErr.message,
                result: "没有找到该商品！"
              })
            } else {
              //如果存在该商品
              if (goodsDoc) {
                //刷选重复性
                let userItem = ''
                userDoc.userCollection.forEach(function (item) {
                  if ((item._id).toString() == (goodsDoc._id).toString()) {
                    userItem = item._id;
                  }
                })
                if (userItem) {
                  return res.json({
                    status:'0',
                    msg: '已存在该商品，不可重复收藏',
                    result: 'collection-error'
                  })
                } else {
                  //把该商品的所有字段传入到该user中
                  userDoc.userCollection.push(goodsDoc);
                  //保存该操作
                  userDoc.save(function (newUserErr, newUserDoc) {
                    if (newUserErr) {
                      return res.json({
                        status: '1',
                        msg: newUserErr.message,
                        result: 'newUserErr出错'
                      })
                    } else {
                      let param = {
                        userId: req.cookies.userId,
                        userName: req.cookies.userName
                      };
                      goodsDoc.goodsCollectioners.push(param);
                      goodsDoc.save(function (newGoodsErr, newGoodsDoc) {
                        if (newGoodsErr) {
                          return res.json({
                            status: '1',
                            msg: newGoodsErr.message,
                            result: 'newGoodsErr出错'
                          })
                        } else {
                          return res.json({
                            status: '0',
                            msg: '',
                            result: 'success'
                          })
                        }
                      })
                    }
                  }) //保存商品操作结束
                }

              } //存在商品的时候的操作结束
            }
          }); //查找id结束
        } //如果存在某用户结束
      }
    }) //findOne--user结束
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-error'
    })
  }
});

//查询收藏的商品列表 -> MyCollection.vue
router.get("/myCollection", function (req, res, next) {
  if (req.cookies.userId && req.cookies.userName) {
    User.findOne({
      _id: req.cookies.userId
    }, function (userErr, userDoc) {
      if (userErr) {
        return res.json({
          status: "1",
          msg: userErr.message,
          result: '没查询到用户！'
        })
      } else {
        return res.json({
          status: '0',
          msg: '',
          result: userDoc
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

//取消收藏 -> MyCollection.vue
router.post("/dislikeCollection", function (req, res, next) {
  if (req.cookies.userId && req.body.goodsId) {
    var userId = req.cookies.userId;
    var goodsId = req.body.goodsId;

    //用户取消收藏该产品
    User.update({
      _id: userId
    }, {
      $pull: {
        'userCollection': {
          '_id': goodsId
        }
      }
    }, function (userUnLikeErr, userUnLikeDoc) {
      if (userUnLikeErr) {
        return res.json({
          status: '1',
          msg: userUnLikeErr.message,
          result: '取消收藏失败！'
        });
      } else {
        Goods.findOne({
          _id: goodsId
        }, function (goodsUnLikeErr, goodsUnLikeDoc) {
          if (goodsUnLikeErr) {
            return res.json({
              status: '1',
              msg: goodsUnLikeErr.message,
              result: '取消收藏失败！'
            });
          } else {
            //因为remove只能根据主键删除，故这里要先找出主键
            let collectionerId = '';
            for(let i=0; i<goodsUnLikeDoc.goodsCollectioners.length; i++){
              if(goodsUnLikeDoc.goodsCollectioners[i].userId == userId){
                collectionerId = goodsUnLikeDoc.goodsCollectioners[i]._id;
              }
            }
            goodsUnLikeDoc.goodsCollectioners.remove({
              _id: collectionerId
            })
            goodsUnLikeDoc.save();
            return res.json({
              status: '0',
              msg: '删除收藏者成功！',
              result: 'success'
            });
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
});

//查询发表的商品列表 -> MyGoods.vue
router.get("/getMyGoodsList", function (req, res, next) {
  if (req.cookies.userId && req.cookies.userName) {
    //根据Id查找该用户
    User.findOne({
      _id: req.cookies.userId
    }, function (userErr, userDoc) {
      //如果没找到
      if (userErr) {
        res.json({
          status: '1',
          msg: userErr.message,
          result: '查询该商品失败'
        })
      } else { //如果找到了
        res.json({
          status: '0',
          msg: '',
          result: userDoc.userGoods.sort(-1)
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '用户未登录！',
      result: 'request-error'
    })
  }
})

//删除商品 -> MyGoods.vue
router.post("/deleteMyGoods", function (req, res, next) {
  if (req.body.goodsId && req.cookies.userId) {
    let goodsId = req.body.goodsId;
    let userId = req.cookies.userId;
    Goods.remove({
      _id: goodsId
    }, function (goodsErr, goodsDoc) {
      if (goodsErr) {
        return res.json({
          status: '0',
          msg: goodsErr.message,
          result: '查找商品失败！'
        })
      } else {
        User.findOne({
          _id: userId
        }, function (userErr, userDoc) {
          if (userErr) {
            return res.json({
              status: '0',
              msg: userErr.message,
              result: '查找用户失败！'
            })
          } else {
            userDoc.userGoods.remove({
              _id: goodsId
            })
            userDoc.save();
            return res.json({
              status: '1',
              msg: '删除商品成功！',
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

//获取商品详细信息 -> GoodDetail.vue
router.get("/getGoodsDetail", function (req, res, next) {
  if (req.param("goodsId")) {
    let goodsId = req.param("goodsId");
    Goods.findOne({
      _id: goodsId
    }, function (goodsErr, goodsDoc) {
      if (goodsErr) {
        res.json({
          status: '1',
          msg: goodsErr.message,
          result: ''
        })
      } else {
        res.json({
          status: '0',
          msg: '',
          result: goodsDoc
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '没有获取到商品id',
      result: 'request-error'
    })
  }
})

//给商品添加评论 -> GoodDetail.vue
router.post("/addGoodsComment", function (req, res, next) {
  if (req.cookies.userId && req.body.goodsId && req.body.commentText) {
    let userId = req.cookies.userId;
    let goodsId = req.body.goodsId;
    let commentText = req.body.commentText;

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
    }

    Goods.findOne({
      _id: goodsId
    }, function (findGoodsErr, goodsDoc) {
      if (findGoodsErr) {
        res.json({
          status: '1',
          msg: findGoodsErr.message,
          result: '查询该商品失败'
        })
      } else {
        User.findOne({
          _id: userId
        }, function (findUserErr, userDoc) {
          if (findUserErr) {
            res.json({
              status: '1',
              msg: findUserErr.message,
              result: '查询该商品失败'
            })
          } else {
            let goodsComment = {
              commentatorId: userId,
              commentatorName: userDoc.userName,
              commentCreatetime: CurrentTime(),
              commentText: commentText,
              commentState: '1'
            }
            goodsDoc.goodsComments.push(goodsComment);
            goodsDoc.save();
            res.json({
              status: '0',
              msg: '',
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

//删除评论 -> GoodDetail.vue
router.post("/deleteGoodsComment", function (req, res, next) {
  if (req.body.commentatorId && req.body.goodsId) {
    Goods.findOne({
      _id: req.body.goodsId
    }, function (goodsErr, goodsDoc) {
      if (goodsErr) {
        return res.json({
          status: '0',
          msg: goodsErr.message,
          result: '查找该商品失败！'
        })
      } else {
        goodsDoc.goodsComments.remove({
          _id: req.body.commentatorId
        });
        goodsDoc.save();
        return res.json({
          status: '0',
          msg: '删除成功！',
          result: 'success'
        })
      }
    })
  } else {
    return res.json({
      status: '0',
      msg: '拒绝空响！',
      result: 'request-eroor'
    })
  }
})

module.exports = router;
