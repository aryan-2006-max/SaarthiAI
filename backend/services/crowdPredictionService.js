import { CROWD_LEVELS } from '../config/constants.js';

export const crowdPredictionService = {
  predictCrowd: async (routeId, date, time, weather, dayType) => {
    // Generate realistic mock predictions based on time
    const hour = parseInt(time.split(':')[0]);
    let baseOccupancy = 40;
    
    // Peak hours modifier
    if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 19)) {
      baseOccupancy += 40;
    }
    
    // Random noise
    const noise = Math.floor(Math.random() * 20) - 10;
    const finalOccupancy = Math.min(100, Math.max(0, baseOccupancy + noise));
    
    let crowdLevel = CROWD_LEVELS.LOW;
    if (finalOccupancy > 80) crowdLevel = CROWD_LEVELS.HIGH;
    else if (finalOccupancy > 50) crowdLevel = CROWD_LEVELS.MODERATE;
    
    return {
      predictedOccupancy: finalOccupancy,
      crowdLevel,
      seatProbability: Math.max(0, 100 - finalOccupancy),
      confidence: 85
    };
  },

  getBoardingRecommendation: async (routeId, stopId) => {
    return {
      recommendation: 'Wait for the next train',
      explanation: 'The train arriving in 2 mins is at 95% capacity. The following train in 7 mins is predicted to be at 45% capacity.',
      options: [
        { vehicleId: 'V1', arrivalTime: '2 mins', crowdLevel: 'high' },
        { vehicleId: 'V2', arrivalTime: '7 mins', crowdLevel: 'low' }
      ]
    };
  },

  getTimeOfDayFactor: (hour) => {
    if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 19)) return 1.5;
    if (hour >= 22 || hour <= 5) return 0.3;
    return 1.0;
  }
};
