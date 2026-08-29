import api from './api';

export const getMe = () => api.get('/users/me');
export const updateMe = (data) => api.put('/users/me', data);
export const getPreferences = () => api.get('/users/me/preferences');
export const updatePreferences = (data) => api.put('/users/me/preferences', data);
export const getAccessibilityProfile = () => api.get('/users/me/accessibility');
export const updateAccessibilityProfile = (data) => api.put('/users/me/accessibility', data);
