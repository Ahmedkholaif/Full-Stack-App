const Data = require('../models/Data');
const initialData = require('./initialData');
module.exports = () => {
  Data.find({}, (err, data) => {
    if (err || data.length === 0) {
      Data.insertMany(initialData.map(i => ({ _id: i.id, ...i })));
      console.log('Data initialized')
    }
  })
};