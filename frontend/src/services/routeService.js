import api from './api';

export const getRoutes = (params) => api.get('/routes', { params });
export const getRoute = (id) => api.get(`/routes/${id}`);
export const searchRoutes = (query) => api.get('/routes/search', { params: { query } });
