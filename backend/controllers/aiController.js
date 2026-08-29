import { aiService } from '../services/aiService.js';
import { fareOptimizationService } from '../services/fareOptimizationService.js';
import Route from '../models/Route.js';

export const chat = async (req, res, next) => {
  try { res.json(await aiService.chat(req.body.query, req.user)); } catch (error) { next(error); }
};

export const getFareOptimization = async (req, res, next) => {
  try { res.json(await fareOptimizationService.suggestSavings(req.user._id)); } catch (error) { next(error); }
};

export const getRecommendation = async (req, res, next) => {
  try {
    const routes = await Route.find().limit(3);
    res.json(await aiService.generateRecommendation(routes, req.user.preferenceWeights));
  } catch (error) { next(error); }
};

export const getDailyBriefing = async (req, res, next) => {
  try { res.json({ briefing: await aiService.generateBriefing(req.user, {}, {}, {}, {}) }); } catch (error) { next(error); }
};
