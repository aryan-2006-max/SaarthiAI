import api from './api';

export const planJourney = (data) => api.post('/journeys/plan', data);
export const startJourney = (id) => api.post(`/journeys/${id}/start`);
export const getActiveJourney = () => api.get('/journeys/active');
export const replanJourney = (id) => api.post(`/journeys/${id}/replan`);
export const completeJourney = (id) => api.post(`/journeys/${id}/complete`);
