import { DISRUPTION_TYPES } from '../config/constants.js';

export const disruptionService = {
  getActiveDisruptions: async (city) => {
    return [
      {
        id: 'D1',
        type: DISRUPTION_TYPES.MAINTENANCE,
        severity: 'high',
        description: 'Track maintenance on Blue Line',
        alternatives: ['Take bus route 412', 'Use Yellow line via Rajiv Chowk']
      }
    ];
  },

  predictDisruptions: async (city, date) => {
    return [];
  },

  getAffectedRoutes: async (disruptionId) => {
    return [];
  },

  createAutoDisruption: async () => {
    // Generate random mock disruption for demo
    return { success: true };
  }
};
