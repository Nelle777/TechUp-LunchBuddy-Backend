const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  gender: { type: String, required: true },
  foodPreferences: {
    cuisineTypes: [String],
    dietaryRequirements: [String],
    otherRestrictions: String,
    lunchStyle: String
  },
  workLocation: { type: String, required: true },
  genderPreference: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);