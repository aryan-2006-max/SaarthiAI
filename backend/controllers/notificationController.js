import Notification from '../models/Notification.js';

export const getNotifications = async (req, res, next) => {
  try { res.json(await Notification.find({ user: req.user._id }).sort({ createdAt: -1 })); } catch (error) { next(error); }
};

export const markRead = async (req, res, next) => {
  try {
    const notif = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    res.json(notif);
  } catch (error) { next(error); }
};

export const markAllRead = async (req, res, next) => {
  try {
    await Notification.updateMany({ user: req.user._id, read: false }, { read: true });
    res.json({ message: 'All marked read' });
  } catch (error) { next(error); }
};

export const getUnreadCount = async (req, res, next) => {
  try {
    const count = await Notification.countDocuments({ user: req.user._id, read: false });
    res.json({ count });
  } catch (error) { next(error); }
};
