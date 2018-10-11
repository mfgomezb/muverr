const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dealSchema = new Schema({
  classificacion: {type: String, enum: ["OPEN","IN PROCESS","CLOSED"]},
  seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  amount: Number,
  rate: Number,
  currency: { type: String, enum: ["USD", "EUR"]},
  bolivares: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
