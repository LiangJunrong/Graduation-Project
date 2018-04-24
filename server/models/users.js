var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userId": String,
  "userCreatetime": String,
  "userName": String,
  "userPassword": String,
  "userHostelArea": String,
  "userHostelAddress": String,
  "userQQ": String,
  "userSex": String,
  "userGoods": [{
    "goodsCreatetime": String,
    "goodsName": String,
    "goodsDescription": String,
    "goodsPrice": String,
    "goodsImage": String,
    "goodsState": String
  }],
  "userClubs": [{
    "clubCreatetime": String,
    "clubCreaterId": String,
    "clubCreaterName": String,
    "clubName": String,
    "clubDescription": String,
    "clubState": String
  }],
  "userTopics": [{
    "topicCreatetime": String,
    "topicCreaterId": String,
    "topicCreaterName": String,
    "topicTitle": String,
    "topicContent": String,
    "topicState": String,
    "orgId": String,
  }],
  "userContacts": [{
    "userId": String,
    "userName": String,
    "chatContent": [{
      "createtime": String,
      "createrId": String,
      "createrName": String,
      "content": String,
      "state": String
    }]
  }],
  "userCollection": [{
    "goodsCreatetime": String,
    "goodsCreaterId": String,
    "goodsCreaterName": String,
    "goodsName": String,
    "goodsDescription": String,
    "goodsPrice": Number,
    "goodsState": String,
    "goodsImage": String,
  }],
  "userState": String
});

module.exports = mongoose.model("User", userSchema);
