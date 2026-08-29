import Card from '../models/Card.js';

export const getCard = async (req, res, next) => {
  try { res.json(await Card.findOne({ user: req.user._id })); } catch (error) { next(error); }
};

export const freezeCard = async (req, res, next) => {
  try {
    const card = await Card.findOneAndUpdate({ user: req.user._id }, { status: 'frozen' }, { new: true });
    res.json(card);
  } catch (error) { next(error); }
};

export const unfreezeCard = async (req, res, next) => {
  try {
    const card = await Card.findOneAndUpdate({ user: req.user._id }, { status: 'active' }, { new: true });
    res.json(card);
  } catch (error) { next(error); }
};
