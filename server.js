// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors()); // Allow Cross-Origin requests (adjust as needed)

app.get('/weather', async (req, res) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const query = '14.682413578492366,121.12798895707499';

  try {
    const fetch = (await import('node-fetch')).default; // Dynamically import node-fetch
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
