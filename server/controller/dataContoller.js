const Data = require('../models/Data');
const MAX_LIMIT = 30;

const getAllData = async (req, res) => {
  try {
    let { limit = 10, skip = 0, filter = { state: 'OPEN' } } = req.query;
    limit = +limit;
    skip = +skip;
    const data = await Data.find(filter).limit(limit > MAX_LIMIT ? MAX_LIMIT : limit).skip(skip);
    res.status(200).send(data);

  } catch (error) {
    next(error);
  }
}

const count = async (req, res) => {
  try {
    const { filter = { state: 'OPEN' } } = req.params
    const count = await Data.count(filter);
    res.status(200).send({ count });

  } catch (error) {
    next(error);
  }
}


const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { ticketState: state } = req.body;
    const result = await Data.updateOne({ _id: id }, { state });

    res.set(200).send(result);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  updateOne,
  count,
  getAllData,
}