import api from './api';

export const getWallet = () => api.get('/wallet');
export const addMoney = (amount) => api.post('/wallet/add', { amount });
export const getSpending = (period) => api.get('/wallet/spending', { params: { period } });
