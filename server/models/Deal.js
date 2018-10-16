const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dealSchema = new Schema({
  classification: {type: String, enum: ["OPEN","IN PROCESS", "PAID", "CONFIRMED" ,"CLOSED"], default:"OPEN"},
  seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  amount: Number,
  rate: Number,
  currency: { type: String, enum: ["USD", "EUR"], default:"EUR"},
  bolivares: Number,
  beneficiaryName: String,
  beneficiaryBank: Number,
  beneficiaryNationalId: Number,
  beneficiaryBankAccount: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
