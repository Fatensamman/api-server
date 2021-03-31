const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    item: { type: "String", required: true },
    cost: { type: "String" },
  });
  const foodModel  = mongoose.model('food',foodSchema);
  module.exports = foodModel;