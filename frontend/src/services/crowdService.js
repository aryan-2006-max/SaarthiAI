import api from './api';

export const getRouteCrowd = (routeId) => api.get(`/crowd/route/${routeId}`);
export const getStopCrowd = (stopId) => api.get(`/crowd/stop/${stopId}`);
export const getVehicleCrowd = (vehicleId) => api.get(`/crowd/vehicle/${vehicleId}`);
export const getBoardingRecommendation = (routeId, stopId) => api.get(`/crowd/recommendation`, { params: { routeId, stopId } });
