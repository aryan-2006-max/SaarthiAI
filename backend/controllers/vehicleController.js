import Vehicle from '../models/Vehicle.js';

export const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) { next(error); }
};

export const getVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.json(vehicle);
  } catch (error) { next(error); }
};

export const updateOccupancy = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, { currentOccupancy: req.body.occupancy }, { new: true });
    res.json(vehicle);
  } catch (error) { next(error); }
};

export const getVehiclesByRoute = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ route: req.params.routeId });
    res.json(vehicles);
  } catch (error) { next(error); }
};
