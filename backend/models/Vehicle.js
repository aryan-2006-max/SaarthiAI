import mongoose from 'mongoose';
import { TRANSPORT_TYPES } from '../config/constants.js';

const vehicleSchema = new mongoose.Schema({
  vehicleId: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  type: { type: String, enum: Object.values(TRANSPORT_TYPES), required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  operator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  capacity: { type: Number, required: true },
  currentOccupancy: { type: Number, default: 0 },
  status: { type: String, enum: ['running', 'stopped', 'maintenance', 'delayed'], default: 'stopped' },
  currentLocation: { lat: Number, lng: Number },
  lastUpdated: { type: Date, default: Date.now },
  accessibility: {
    wheelchairSpace: { type: Boolean, default: false },
    lowFloor: { type: Boolean, default: false }
  }
});

export default mongoose.model('Vehicle', vehicleSchema);
