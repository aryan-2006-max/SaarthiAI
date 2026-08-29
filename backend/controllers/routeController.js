import Route from '../models/Route.js';

export const getRoutes = async (req, res, next) => {
  try {
    const filters = {};
    if (req.query.city) filters.city = req.query.city;
    if (req.query.type) filters.type = req.query.type;
    const routes = await Route.find(filters);
    res.json(routes);
  } catch (error) { next(error); }
};

export const getRoute = async (req, res, next) => {
  try {
    const route = await Route.findById(req.params.id).populate('stops.stop');
    if (!route) return res.status(404).json({ message: 'Not found' });
    res.json(route);
  } catch (error) { next(error); }
};

export const createRoute = async (req, res, next) => {
  try {
    const route = await Route.create({ ...req.body, operator: req.user._id });
    res.status(201).json(route);
  } catch (error) { next(error); }
};

export const updateRoute = async (req, res, next) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(route);
  } catch (error) { next(error); }
};

export const searchRoutes = async (req, res, next) => {
  try {
    // Basic mock implementation
    const routes = await Route.find().limit(5);
    res.json(routes);
  } catch (error) { next(error); }
};
