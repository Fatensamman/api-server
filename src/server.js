'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/food/', foodRouter);
app.use('/api/v1/clothes/', clothesRouter);

app.get('/bad', (req, res) => {
  throw new Error('something wrong!!');
});
// app.get('/hhh', (req, res) => {
//   res.status(404).send('not found')
// });
app.use('*', notFoundHndler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 4044;
    app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`));
  }
}