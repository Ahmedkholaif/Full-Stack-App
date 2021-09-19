const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  _id: String,
  "source": {
    type: "string"
  },
  "sourceIdentityId": {
    type: "string"
  },
  "reference": {
    "referenceId": String,
    "referenceType": String,
  },
  "state": {
    type: String,
    enum: ['OPEN', 'BLOCKED', 'CLOSED'],

  },
  "payload": {
    "source": String,
    "reportType": String,
    "message": String,
    "reportId": String,
    "referenceResourceId": String,
    "referenceResourceType": String,
  },
}, { collection: 'data' });


const Data = new mongoose.model('Data', dataSchema);
module.exports = Data;