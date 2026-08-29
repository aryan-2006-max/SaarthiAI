import Report from '../models/Report.js';

export const createReport = async (req, res, next) => {
  try {
    const report = await Report.create({ ...req.body, user: req.user._id });
    res.status(201).json(report);
  } catch (error) { next(error); }
};

export const getReports = async (req, res, next) => {
  try { res.json(await Report.find()); } catch (error) { next(error); }
};

export const getUserReports = async (req, res, next) => {
  try { res.json(await Report.find({ user: req.user._id })); } catch (error) { next(error); }
};

export const updateReportStatus = async (req, res, next) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, { status: req.body.status, verifiedBy: req.user._id }, { new: true });
    res.json(report);
  } catch (error) { next(error); }
};

export const upvoteReport = async (req, res, next) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, { new: true });
    res.json(report);
  } catch (error) { next(error); }
};
