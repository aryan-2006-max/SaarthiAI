import Disruption from '../models/Disruption.js';
import { disruptionService } from '../services/disruptionService.js';

export const getDisruptions = async (req, res, next) => {
  try { res.json(await Disruption.find()); } catch (error) { next(error); }
};

export const getActiveDisruptions = async (req, res, next) => {
  try { res.json(await disruptionService.getActiveDisruptions(req.query.city)); } catch (error) { next(error); }
};

export const createDisruption = async (req, res, next) => {
  try {
    const disruption = await Disruption.create({ ...req.body, reportedBy: req.user._id });
    res.status(201).json(disruption);
  } catch (error) { next(error); }
};

export const updateDisruption = async (req, res, next) => {
  try {
    const disruption = await Disruption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(disruption);
  } catch (error) { next(error); }
};
