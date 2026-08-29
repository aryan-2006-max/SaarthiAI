import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['traffic', 'crowd', 'route_change', 'journey_reminder', 'wallet', 'safety', 'disruption', 'briefing', 'report', 'general'], required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  data: { type: Object },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

notificationSchema.index({ user: 1, read: 1 });

export default mongoose.model('Notification', notificationSchema);
