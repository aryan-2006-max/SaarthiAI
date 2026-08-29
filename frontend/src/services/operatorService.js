import api from './api';

export const getDashboard = () => api.get('/operator/dashboard');
export const getVehicles = () => api.get('/operator/vehicles');
export const getRoutes = () => api.get('/operator/routes');
export const getAnalytics = () => api.get('/operator/analytics');
