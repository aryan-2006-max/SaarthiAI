import { TRANSPORT_TYPES } from '../config/constants.js';

export const lastMileService = {
  getLastMileOptions: async (location, destination) => {
    return [
      { mode: TRANSPORT_TYPES.WALK, distance: 0.8, duration: 10, cost: 0, safetyScore: 85 },
      { mode: TRANSPORT_TYPES.E_RICKSHAW, distance: 1.2, duration: 5, cost: 20, safetyScore: 70 },
      { mode: TRANSPORT_TYPES.BIKE_TAXI, distance: 1.5, duration: 4, cost: 35, safetyScore: 65 }
    ];
  },

  recommendBestOption: async (options, preferences) => {
    // Simple mock logic
    return options.sort((a, b) => b.safetyScore - a.safetyScore);
  }
};
