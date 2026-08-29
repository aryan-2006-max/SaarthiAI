export const fareOptimizationService = {
  analyzeSpending: async (userId, period) => {
    return {
      total: 1250,
      byTransport: { metro: 800, bus: 250, auto: 200 },
      byWeek: [300, 320, 290, 340]
    };
  },

  suggestSavings: async (userId) => {
    return {
      suggestion: 'Buy a Monthly Metro Pass',
      potentialSavings: '₹450',
      details: 'Based on your 22 metro rides last month costing ₹800, a monthly pass at ₹350 will save you money.'
    };
  },

  compareRouteFares: async (routes) => {
    return routes.map(r => ({ route: r.name, fare: r.fare, time: r.duration }));
  }
};
