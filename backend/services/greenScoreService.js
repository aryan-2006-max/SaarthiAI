export const greenScoreService = {
  calculateGreenScore: async (userId, month) => {
    // Mock logic
    return {
      score: 78,
      breakdown: { publicTransport: 50, walking: 20, cycling: 8, shared: 0 }
    };
  },

  estimateCO2Saved: async (userId, month) => {
    // ~0.23kg CO2 per km for car, bus is lower. 
    return 45.5; // kg
  }
};
