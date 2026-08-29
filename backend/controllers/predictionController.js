import { crowdPredictionService } from '../services/crowdPredictionService.js';
import { trafficService } from '../services/trafficService.js';
import { disruptionService } from '../services/disruptionService.js';

export const predictCrowd = async (req, res, next) => {
  try {
    const { routeId, date, time, weather, dayType } = req.query;
    res.json(await crowdPredictionService.predictCrowd(routeId, date, time, weather, dayType));
  } catch (error) { next(error); }
};

export const predictTraffic = async (req, res, next) => {
  try {
    const { lat, lng, dateTime } = req.query;
    res.json(await trafficService.predictTraffic({lat, lng}, dateTime));
  } catch (error) { next(error); }
};

export const predictDisruption = async (req, res, next) => {
  try {
    const { city, date } = req.query;
    res.json(await disruptionService.predictDisruptions(city, date));
  } catch (error) { next(error); }
};
