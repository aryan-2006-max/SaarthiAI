import { env } from '../config/env.js';

export const aiService = {
  chat: async (query, userData) => {
    // Basic mock logic for AI chat matching keywords
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('route') || lowerQuery.includes('fastest')) {
      return { response: "Based on your preferences, the metro is currently the fastest option with a commute score of 85. Would you like me to book a ticket?" };
    }
    if (lowerQuery.includes('crowd')) {
      return { response: "The yellow line metro is currently experiencing high crowd levels. I recommend taking the AC bus which is only moderately crowded and takes 5 mins longer." };
    }
    if (lowerQuery.includes('cost') || lowerQuery.includes('spend')) {
      return { response: `You have spent ₹450 this week. Buying a weekly pass for ₹300 could save you ₹150 on your regular commute.` };
    }
    if (lowerQuery.includes('safe') || lowerQuery.includes('accessible')) {
      return { response: "I've filtered routes to prioritize well-lit stations with elevator access as per your safety and accessibility preferences." };
    }
    if (lowerQuery.includes('weather')) {
      return { response: "It's expected to rain in 30 mins. I suggest taking the metro instead of walking to the bus stop." };
    }
    
    return { response: "I'm your SaarthiAI assistant. I can help you find routes, check crowd levels, optimize your spending, and ensure a safe commute. How can I help?" };
  },

  generateRecommendation: async (routes, preferences) => {
    return routes.map(route => {
      route.isRecommended = route.commuteScore > 80;
      return route;
    }).sort((a, b) => b.commuteScore - a.commuteScore);
  },

  generateBriefing: async (user, journeyData, crowdData, trafficData, weatherData) => {
    return `Good morning, ${user.name}! Your usual route to work is clear, but there's a moderate crowd on the Metro. Weather is sunny. Have a safe trip!`;
  },

  generateExplanation: async (route, alternatives) => {
    return [
      `Saves 15 mins compared to bus.`,
      `Crowd level is low, high chance of seating.`,
      `Costs ₹40, well within your budget.`
    ];
  }
};
