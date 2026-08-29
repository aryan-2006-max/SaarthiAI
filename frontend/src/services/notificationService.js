import api from './api';

export const getNotifications = () => api.get('/notifications');
export const markRead = (id) => api.put(`/notifications/${id}/read`);
export const markAllRead = () => api.put('/notifications/read-all');
export const getUnreadCount = () => api.get('/notifications/unread-count');
