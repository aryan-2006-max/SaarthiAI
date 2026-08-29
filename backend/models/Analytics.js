import mongoose from 'mongoose';
import { CITIES } from '../config/constants.js';

const analyticsSchema = new mongoose.Schema({
  city: { type: String, enum: CITIES, required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  metrics: {
    totalCommuters: { type: Number, default: 0 },
    activeJourneys: { type: Number, default: 0 },
    vehiclesTracked: { type: Number, default: 0 },
    totalTransactions: { type: Number, default: 0 },
    avgCrowdLevel: { type: Number, default: 0 },
    avgTrafficLevel: { type: Number, default: 0 },
    topRoutes: [{
      route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
      usage: Number
    }],
    peakHours: [Number],
    incidentCount: { type: Number, default: 0 }
  }
});

export default mongoose.model('Analytics', analyticsSchema);
