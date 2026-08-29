import { trafficService } from '../services/trafficService.js';

export const getTrafficStatus = async (req, res, next) => {
  try {
    const { lat, lng } = req.query;
    res.json(await trafficService.getTrafficStatus({lat, lng}));
  } catch (error) { next(error); }
};

export const getRouteTraffic = async (req, res, next) => {
  try {
    res.json(await trafficService.getRouteTraffic(req.params.routeId));
  } catch (error) { next(error); }
};
