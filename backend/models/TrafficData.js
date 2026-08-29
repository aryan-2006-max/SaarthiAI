import mongoose from 'mongoose';
import { TRAFFIC_LEVELS, CITIES } from '../config/constants.js';

const trafficDataSchema = new mongoose.Schema({
  location: { lat: Number, lng: Number },
  area: { type: String },
  city: { type: String, enum: CITIES, required: true },
  level: { type: String, enum: Object.values(TRAFFIC_LEVELS), required: true },
  delayMinutes: { type: Number, default: 0 },
  predictedLevel: { type: String, enum: Object.values(TRAFFIC_LEVELS) },
  description: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('TrafficData', trafficDataSchema);
