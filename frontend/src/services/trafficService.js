import api from './api';

export const getTrafficStatus = (params) => api.get('/traffic', { params });
export const getRouteTraffic = (routeId) => api.get(`/traffic/route/${routeId}`);
