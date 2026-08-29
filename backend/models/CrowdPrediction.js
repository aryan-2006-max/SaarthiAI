import mongoose from 'mongoose';
import { CROWD_LEVELS } from '../config/constants.js';

const crowdPredictionSchema = new mongoose.Schema({
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  stop: { type: mongoose.Schema.Types.ObjectId, ref: 'Stop' },
  date: { type: String, required: true },
  time: { type: String, required: true }, // HH:MM
  predictedOccupancy: { type: Number, required: true },
  crowdLevel: { type: String, enum: Object.values(CROWD_LEVELS), required: true },
  seatProbability: { type: Number, required: true },
  confidence: { type: Number, required: true },
  factors: {
    timeOfDay: Number,
    dayOfWeek: Number,
    weather: Number,
    holiday: Number,
    event: Number
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('CrowdPrediction', crowdPredictionSchema);
