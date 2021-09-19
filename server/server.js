const express = require('express');
require('./config/dbConnection');
const init = require('./utils/init');
const appConfig = require('./config/appConfig');
const PORT = appConfig.port || 3020;
const errorHandler = require('./utils/errorHandler')
const dataRouter = require('./routes/dataRouter');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static('public'));
app.use('/api/data', dataRouter);

app.use(errorHandler)
console.log(path.resolve(__dirname, 'client', 'index.html'))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  })
}
app.on('listening', init);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
  init()
});
