import api from './api';

export const createReport = (data) => api.post('/reports', data);
export const getReports = (params) => api.get('/reports', { params });
export const getUserReports = () => api.get('/reports/user');
export const updateReportStatus = (id, status) => api.put(`/reports/${id}/status`, { status });
export const upvoteReport = (id) => api.post(`/reports/${id}/upvote`);
