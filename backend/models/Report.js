import mongoose from 'mongoose';
import { REPORT_TYPES, CITIES } from '../config/constants.js';

const reportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: Object.values(REPORT_TYPES), required: true },
  location: { lat: Number, lng: Number, address: String },
  city: { type: String, enum: CITIES, required: true },
  description: { type: String, required: true },
  photo: String,
  severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
  status: { type: String, enum: ['pending', 'verified', 'resolved'], default: 'pending' },
  upvotes: { type: Number, default: 0 },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Report', reportSchema);
