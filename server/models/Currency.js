
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CurrencySchema = new Schema({
  price: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Currency = mongoose.model('Currency', CurrencySchema);
module.exports = Currency;