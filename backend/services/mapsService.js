export const mapsService = {
  getDistance: (from, to) => {
    // Haversine formula mock
    return 5.2; // km
  },

  estimateTime: (from, to, mode) => {
    const speeds = { walk: 5, cycle: 15, auto: 25, bus: 20, metro: 35 };
    const distance = mapsService.getDistance(from, to);
    const speed = speeds[mode] || 20;
    return (distance / speed) * 60; // minutes
  },

  getNearbyStops: async (lat, lng, radius) => {
    return [];
  }
};
