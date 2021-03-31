'use strict';

const mongoose = require('mongoose');

require('dotenv').config();


// const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    require('./src/server.js').start(process.env.PORT);
})
.catch((error)=>{
    console.log('error with connected',error.message)
})