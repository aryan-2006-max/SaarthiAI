import { CROWD_LEVELS, TRANSPORT_TYPES } from '../config/constants.js';

export const routeScoringService = {
  scoreRoute: (route, preferences) => {
    const weights = preferences?.weights || { time: 30, cost: 15, crowd: 20, safety: 20, accessibility: 10, environment: 5 };
    
    const timeScore = routeScoringService.calculateTimeScore(route.duration, 120) * (weights.time / 100);
    const costScore = routeScoringService.calculateCostScore(route.fare, 200) * (weights.cost / 100);
    const crowdScore = routeScoringService.calculateCrowdScore(route.crowdLevel || 'moderate') * (weights.crowd / 100);
    const safetyScore = routeScoringService.calculateSafetyScore(route) * (weights.safety / 100);
    const accessScore = routeScoringService.calculateAccessibilityScore(route, preferences?.accessibilityNeeds) * (weights.accessibility / 100);
    const envScore = routeScoringService.calculateEnvironmentScore(route) * (weights.environment / 100);
    
    const commuteScore = Math.round(timeScore + costScore + crowdScore + safetyScore + accessScore + envScore);
    
    route.commuteScore = commuteScore;
    route.scoreBreakdown = { time: timeScore, cost: costScore, crowd: crowdScore, safety: safetyScore, accessibility: accessScore, environment: envScore };
    return route;
  },

  rankRoutes: (routes, preferences) => {
    const scoredRoutes = routes.map(r => routeScoringService.scoreRoute(r, preferences));
    return scoredRoutes.sort((a, b) => b.commuteScore - a.commuteScore);
  },

  calculateTimeScore: (duration, maxDuration) => Math.max(0, 100 - (duration / maxDuration) * 100),
  calculateCostScore: (fare, maxFare) => Math.max(0, 100 - (fare / maxFare) * 100),
  calculateCrowdScore: (level) => level === CROWD_LEVELS.LOW ? 95 : level === CROWD_LEVELS.MODERATE ? 60 : 25,
  calculateSafetyScore: (route) => 85, // Mocked
  calculateAccessibilityScore: (route, needs) => 80, // Mocked
  calculateEnvironmentScore: (route) => route.mode === TRANSPORT_TYPES.WALK ? 100 : route.mode === TRANSPORT_TYPES.METRO ? 85 : 50
};
