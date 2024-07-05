const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  location: { type: String, required: true },
  temperature: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weather', WeatherSchema);
