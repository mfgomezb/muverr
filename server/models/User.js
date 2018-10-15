const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  country: String,
  city: String,
  street: String,
  area_code: Number,
  operations: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Deal'}
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;