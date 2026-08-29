import User from '../models/User.js';
import Preference from '../models/Preference.js';
import AccessibilityProfile from '../models/AccessibilityProfile.js';

export const getMe = async (req, res, next) => {
  try { res.json(req.user); } catch (error) { next(error); }
};

export const updateMe = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
    res.json(user);
  } catch (error) { next(error); }
};

export const getPreferences = async (req, res, next) => {
  try {
    let pref = await Preference.findOne({ user: req.user._id });
    res.json(pref || {});
  } catch (error) { next(error); }
};

export const updatePreferences = async (req, res, next) => {
  try {
    let pref = await Preference.findOneAndUpdate({ user: req.user._id }, req.body, { new: true, upsert: true });
    res.json(pref);
  } catch (error) { next(error); }
};

export const getAccessibilityProfile = async (req, res, next) => {
  try {
    let profile = await AccessibilityProfile.findOne({ user: req.user._id });
    res.json(profile || {});
  } catch (error) { next(error); }
};

export const updateAccessibilityProfile = async (req, res, next) => {
  try {
    let profile = await AccessibilityProfile.findOneAndUpdate({ user: req.user._id }, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (error) { next(error); }
};
