import Vehicle from '../models/Vehicle.js';
import Route from '../models/Route.js';

export const getDashboard = async (req, res, next) => {
  try { res.json({ activeVehicles: await Vehicle.countDocuments({operator: req.user._id, status: 'running'}) }); } catch (error) { next(error); }
};

export const getOperatorVehicles = async (req, res, next) => {
  try { res.json(await Vehicle.find({ operator: req.user._id })); } catch (error) { next(error); }
};

export const getOperatorRoutes = async (req, res, next) => {
  try { res.json(await Route.find({ operator: req.user._id })); } catch (error) { next(error); }
};

export const getOperatorAnalytics = async (req, res, next) => {
  try { res.json({}); } catch (error) { next(error); }
};
