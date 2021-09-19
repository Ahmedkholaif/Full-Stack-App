const express = require('express');
const dataContoller = require('../controller/dataContoller')

const dataRouter = express.Router();
dataRouter.get('/', dataContoller.getAllData);

dataRouter.put('/:id', dataContoller.updateOne)

dataRouter.get('/count', dataContoller.count)

module.exports = dataRouter;