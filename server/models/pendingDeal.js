const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pendingDealSchema = new Schema({
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

const pendingDeal = mongoose.model('pendingDeal', pendingDealSchema);
module.exports = pendingDeal;