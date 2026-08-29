import api from './api';

export const chat = (message) => api.post('/ai/chat', { message });
export const getFareOptimization = () => api.get('/ai/fare-optimization');
export const getDailyBriefing = () => api.get('/ai/daily-briefing');
export const getRecommendation = (data) => api.post('/ai/recommendation', data);
