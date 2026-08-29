import Stop from '../models/Stop.js';

export const getStops = async (req, res, next) => {
  try {
    const stops = await Stop.find(req.query.city ? { city: req.query.city } : {});
    res.json(stops);
  } catch (error) { next(error); }
};

export const getStop = async (req, res, next) => {
  try {
    const stop = await Stop.findById(req.params.id);
    res.json(stop);
  } catch (error) { next(error); }
};

export const getNearbyStops = async (req, res, next) => {
  try {
    const { lat, lng, radius = 5000 } = req.query;
    const stops = await Stop.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: parseInt(radius)
        }
      }
    });
    res.json(stops);
  } catch (error) { next(error); }
};
