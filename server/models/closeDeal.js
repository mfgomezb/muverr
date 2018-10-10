const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const closeDeal = new Schema({
  seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  amount: Number,
  rate: Number,
  currency: { enum: ["USD", "EUR"] },
  bolivares: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const closeDeal = mongoose.model('closeDeal', closeDeal);
module.exports = closeDeal;