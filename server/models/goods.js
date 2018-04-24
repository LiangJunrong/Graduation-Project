var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
  "goodsCreatetime": String,
  "goodsCreaterId": String,
  "goodsCreaterName": String,
  "goodsName": String,
  "goodsDescription": String,
  "goodsPrice": Number,
  "goodsImage": String,
  "goodsState": String,
  "goodsCollectioners": [{
    "userId": String,
    "userName": String
  }],
  "goodsComments": [{
    "commentatorId": String,
    "commentatorName": String,
    "commentCreatetime": String,
    "commentText": String,
    "commentState": String
  }]
});

module.exports = mongoose.model('Good', goodsSchema);
