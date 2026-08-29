import mongoose from 'mongoose';
import { TRANSPORT_TYPES, CITIES } from '../config/constants.js';

const routeSchema = new mongoose.Schema({
  routeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, enum: CITIES, required: true },
  type: { type: String, enum: Object.values(TRANSPORT_TYPES), required: true },
  stops: [{
    stop: { type: mongoose.Schema.Types.ObjectId, ref: 'Stop' },
    order: Number,
    distanceFromStart: Number,
    timeFromStart: Number
  }],
  operator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  schedule: {
    startTime: String,
    endTime: String,
    frequency: Number
  },
  fare: {
    base: Number,
    perKm: Number
  },
  distance: Number,
  estimatedTime: Number,
  isActive: { type: Boolean, default: true },
  accessibility: {
    wheelchairAccessible: { type: Boolean, default: false },
    hasRamp: { type: Boolean, default: false },
    hasElevator: { type: Boolean, default: false }
  }
});

routeSchema.index({ city: 1, type: 1 });

export default mongoose.model('Route', routeSchema);
