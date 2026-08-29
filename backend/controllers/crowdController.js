import CrowdData from '../models/CrowdData.js';
import { crowdPredictionService } from '../services/crowdPredictionService.js';

export const getRouteCrowd = async (req, res, next) => {
  try { res.json(await CrowdData.find({ route: req.params.id })); } catch (error) { next(error); }
};

export const getStopCrowd = async (req, res, next) => {
  try { res.json(await CrowdData.find({ stop: req.params.id })); } catch (error) { next(error); }
};

export const getVehicleCrowd = async (req, res, next) => {
  try { res.json(await CrowdData.find({ vehicle: req.params.id })); } catch (error) { next(error); }
};

export const getBoardingRecommendation = async (req, res, next) => {
  try {
    const rec = await crowdPredictionService.getBoardingRecommendation(req.query.routeId, req.query.stopId);
    res.json(rec);
  } catch (error) { next(error); }
};
