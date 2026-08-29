import mongoose from 'mongoose';
import { CITIES } from '../config/constants.js';

const stopSchema = new mongoose.Schema({
  stopId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, enum: CITIES, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [lng, lat]
  },
  type: { type: String, enum: ['bus_stop', 'metro_station', 'train_station', 'auto_stand', 'multi_modal'], required: true },
  routes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }],
  accessibility: {
    hasRamp: { type: Boolean, default: false },
    hasElevator: { type: Boolean, default: false },
    hasTactile: { type: Boolean, default: false },
    hasSeating: { type: Boolean, default: false },
    hasShelter: { type: Boolean, default: false }
  },
  facilities: [String]
});

stopSchema.index({ location: '2dsphere' });

export default mongoose.model('Stop', stopSchema);
