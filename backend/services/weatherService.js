export const weatherService = {
  getCurrentWeather: async (city) => {
    const conditions = ['sunny', 'cloudy', 'rain', 'heavy_rain', 'storm'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    return {
      condition: randomCondition,
      temperature: 28,
      humidity: 65,
      precipitationProb: randomCondition.includes('rain') ? 80 : 10
    };
  },

  getWeatherForecast: async (city, date) => {
    return await weatherService.getCurrentWeather(city);
  }
};
