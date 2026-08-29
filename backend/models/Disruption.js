import mongoose from 'mongoose';
import { DISRUPTION_TYPES, CITIES } from '../config/constants.js';

const disruptionSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(DISRUPTION_TYPES), required: true },
  location: { lat: Number, lng: Number, area: String },
  city: { type: String, enum: CITIES, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], required: true },
  status: { type: String, enum: ['active', 'resolved', 'predicted'], default: 'active' },
  affectedRoutes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }],
  description: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  alternatives: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Disruption', disruptionSchema);
