var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var hostelsSchema = new Schema({
    "hostelSex": String,
    "hostelArea": [{
        "hostelName": String,
        "hostelStudents": [String]
    }]
});

module.exports = mongoose.model('Hostel', hostelsSchema);
