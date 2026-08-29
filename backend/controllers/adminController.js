import Analytics from '../models/Analytics.js';
import User from '../models/User.js';
import Report from '../models/Report.js';

export const getOverview = async (req, res, next) => {
  try { res.json({ totalUsers: await User.countDocuments(), totalReports: await Report.countDocuments() }); } catch (error) { next(error); }
};

export const getAnalytics = async (req, res, next) => {
  try { res.json(await Analytics.find()); } catch (error) { next(error); }
};

export const getCrowdHeatmap = async (req, res, next) => { try { res.json([]); } catch(e) { next(e); } };
export const getTrafficHeatmap = async (req, res, next) => { try { res.json([]); } catch(e) { next(e); } };
export const getDemandPredictions = async (req, res, next) => { try { res.json([]); } catch(e) { next(e); } };
export const getRouteAnalytics = async (req, res, next) => { try { res.json([]); } catch(e) { next(e); } };
export const getAllReports = async (req, res, next) => { try { res.json(await Report.find()); } catch(e) { next(e); } };
export const getAllUsers = async (req, res, next) => { try { res.json(await User.find()); } catch(e) { next(e); } };
