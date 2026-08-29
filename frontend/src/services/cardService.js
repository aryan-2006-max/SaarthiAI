import api from './api';

export const getCard = () => api.get('/card');
export const freezeCard = () => api.post('/card/freeze');
export const unfreezeCard = () => api.post('/card/unfreeze');
