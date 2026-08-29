import Journey from '../models/Journey.js';
import Route from '../models/Route.js';
import { routeScoringService } from '../services/routeScoringService.js';
import { aiService } from '../services/aiService.js';

export const planJourney = async (req, res, next) => {
  try {
    const { origin, destination } = req.body;
    // Generate 3 mock multimodal routes for the demo
    const routes = await Route.find().limit(3);
    
    let suggestedRoutes = routes.map((r, i) => ({
      mode: r.type,
      routeId: r._id,
      name: r.name,
      duration: 30 + i * 10,
      fare: 20 + i * 15,
      crowdLevel: i === 0 ? 'high' : i === 1 ? 'moderate' : 'low'
    }));
    
    // Core Scoring Engine Logic
    const preferences = req.user.preferenceWeights || { time: 30, cost: 15, crowd: 20, safety: 20, accessibility: 10, environment: 5 };
    const rankedRoutes = routeScoringService.rankRoutes(suggestedRoutes, { weights: preferences });
    
    // Explain recommendations
    for (let r of rankedRoutes) {
      r.explanation = await aiService.generateExplanation(r, rankedRoutes);
    }

    res.json({ recommended: rankedRoutes[0], alternatives: rankedRoutes.slice(1) });
  } catch (error) { next(error); }
};

export const startJourney = async (req, res, next) => {
  try {
    const journey = await Journey.create({ ...req.body, user: req.user._id, status: 'active', startTime: new Date() });
    res.status(201).json(journey);
  } catch (error) { next(error); }
};

export const getActiveJourney = async (req, res, next) => {
  try {
    const journey = await Journey.findOne({ user: req.user._id, status: 'active' });
    res.json(journey || {});
  } catch (error) { next(error); }
};

export const completeJourney = async (req, res, next) => {
  try {
    const journey = await Journey.findByIdAndUpdate(req.params.id, { status: 'completed', endTime: new Date() }, { new: true });
    res.json(journey);
  } catch (error) { next(error); }
};

export const replanJourney = async (req, res, next) => {
  try {
    res.json({ message: 'Journey replanned successfully' });
  } catch (error) { next(error); }
};
