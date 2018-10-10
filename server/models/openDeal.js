const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const openDealSchema = new Schema({
  seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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

const openDeal = mongoose.model('openDeal', openDealSchema);

module.exports = openDeal;
