const express = require('express');
const router = express.Router();
const axios = require('axios');
const Weather = require('../models/Weather'); 
// const API_Key = 'fcb72878ac61531c269b7d04ef848e77'; 

router.get('/current', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_Key}`
    );

    const data = response.data;
    const newWeather = new Weather({
      location: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });

    await newWeather.save();

    res.json(newWeather);
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;
