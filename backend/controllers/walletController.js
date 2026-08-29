import Wallet from '../models/Wallet.js';
import { fareOptimizationService } from '../services/fareOptimizationService.js';

export const getWallet = async (req, res, next) => {
  try {
    let wallet = await Wallet.findOne({ user: req.user._id });
    if (!wallet) wallet = await Wallet.create({ user: req.user._id });
    res.json(wallet);
  } catch (error) { next(error); }
};

export const addMoney = async (req, res, next) => {
  try {
    const wallet = await Wallet.findOneAndUpdate({ user: req.user._id }, { $inc: { balance: req.body.amount } }, { new: true });
    res.json(wallet);
  } catch (error) { next(error); }
};

export const getSpending = async (req, res, next) => {
  try {
    res.json(await fareOptimizationService.analyzeSpending(req.user._id, req.query.period));
  } catch (error) { next(error); }
};
