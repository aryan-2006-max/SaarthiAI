import mongoose from 'mongoose';
import { CROWD_LEVELS } from '../config/constants.js';

const crowdDataSchema = new mongoose.Schema({
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  stop: { type: mongoose.Schema.Types.ObjectId, ref: 'Stop' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  occupancyPercent: { type: Number, required: true },
  crowdLevel: { type: String, enum: Object.values(CROWD_LEVELS), required: true },
  seatProbability: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

// TTL index to automatically delete old records
crowdDataSchema.index({ timestamp: 1 }, { expireAfterSeconds: 86400 * 7 }); // Keep for 7 days

export default mongoose.model('CrowdData', crowdDataSchema);
