import api from './api';

export const authService = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
};
export const userService = { getMe: () => api.get('/user/me') };
export const journeyService = { planJourney: (d) => api.post('/journey/plan', d) };
export const routeService = { getRoutes: () => api.get('/routes') };
export const crowdService = { getCrowd: (id) => api.get(`/crowd/${id}`) };
export const trafficService = { getTraffic: (id) => api.get(`/traffic/${id}`) };
export const walletService = { getWallet: () => api.get('/wallet') };
export const cardService = { getCard: () => api.get('/card') };
export const transactionService = { getTransactions: () => api.get('/transactions') };
export const notificationService = { getNotifications: () => api.get('/notifications') };
export const aiService = { chat: (msg) => api.post('/ai/chat', {msg}) };
export const reportService = { getReports: () => api.get('/reports') };
export const adminService = { getStats: () => api.get('/admin/stats') };
export const operatorService = { getDashboard: () => api.get('/operator/dashboard') };
