import api from './api';

export const getOverview = () => api.get('/admin/overview');
export const getAnalytics = (params) => api.get('/admin/analytics', { params });
export const getCrowdHeatmap = (city) => api.get('/admin/heatmap/crowd', { params: { city } });
export const getTrafficHeatmap = (city) => api.get('/admin/heatmap/traffic', { params: { city } });
export const getDemandPredictions = (city) => api.get('/admin/predictions/demand', { params: { city } });
export const getRouteAnalytics = () => api.get('/admin/analytics/routes');
export const getAllReports = () => api.get('/admin/reports');
export const getAllUsers = (params) => api.get('/admin/users', { params });
