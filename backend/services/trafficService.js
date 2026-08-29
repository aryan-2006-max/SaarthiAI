import { TRAFFIC_LEVELS } from '../config/constants.js';

export const trafficService = {
  getTrafficStatus: async (location) => {
    const hour = new Date().getHours();
    let level = TRAFFIC_LEVELS.FREE;
    if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 20)) {
      level = TRAFFIC_LEVELS.HEAVY;
    } else if (hour >= 11 && hour <= 16) {
      level = TRAFFIC_LEVELS.MODERATE;
    }
    
    return {
      level,
      delayMinutes: level === TRAFFIC_LEVELS.HEAVY ? 25 : level === TRAFFIC_LEVELS.MODERATE ? 10 : 0
    };
  },

  getRouteTraffic: async (routeId) => {
    return await trafficService.getTrafficStatus({});
  },

  predictTraffic: async (location, dateTime) => {
    const date = new Date(dateTime);
    return await trafficService.getTrafficStatus({ lat: 0, lng: 0 }); // Mock calling with time
  }
};
