import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const skip = parseInt(req.query.skip) || 0;
    const tx = await Transaction.find({ user: req.user._id }).sort({ timestamp: -1 }).skip(skip).limit(limit);
    res.json(tx);
  } catch (error) { next(error); }
};

export const getTransactionSummary = async (req, res, next) => {
  try {
    const count = await Transaction.countDocuments({ user: req.user._id });
    res.json({ totalCount: count });
  } catch (error) { next(error); }
};
