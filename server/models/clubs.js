var mongoose = require('mongoose');

var clubsSchema = new mongoose.Schema({
  "clubCreatetime": String,
  "clubCreaterId": String,
  "clubCreaterName": String,
  "clubName": String,
  "clubDescription": String,
  "clubMenbers": [{
    "userId": String,
    "userName": String
  }],
  "clubTopics": [{
    "topicCreatetime": String,
    "topicCreaterId": String,
    "topicCreaterName": String,
    "topicTitle": String,
    "topicContent": String,
    "topicComment": [{
      "commentatorId": String,
      "commentatorName": String,
      "commentCreatetime": String,
      "commentText": String,
      "commentState": String
    }],
    "topicLike": [{
      "userId": String,
      "userName": String
    }],
    "topicState": String
  }],
  "clubState": String
})

module.exports = mongoose.model("Club", clubsSchema);
