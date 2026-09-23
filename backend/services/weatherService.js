import { env } from '../config/env.js';

export const weatherService = {
  getCurrentWeather: async (city = 'Delhi') => {
    // Live OpenWeatherMap API Integration if API Key is present
    if (env.WEATHER_API_KEY) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},IN&units=metric&appid=${env.WEATHER_API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          return {
            condition: data.weather?.[0]?.main?.toLowerCase() || 'clear',
            temperature: Math.round(data.main?.temp || 28),
            humidity: data.main?.humidity || 65,
            precipitationProb: data.weather?.[0]?.main?.toLowerCase().includes('rain') ? 85 : 15
          };
        }
      } catch (err) {
        console.warn('OpenWeatherMap API call failed, using SaarthiAI weather simulation:', err.message);
      }
    }

    // Fallback Simulation Engine
    return {
      condition: 'rain',
      temperature: 28,
      humidity: 70,
      precipitationProb: 80
    };
  },

  getWeatherForecast: async (city, date) => {
    return await weatherService.getCurrentWeather(city);
  }
};
