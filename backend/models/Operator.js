import mongoose from 'mongoose';
import { CITIES } from '../config/constants.js';

const operatorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  company: { type: String, required: true },
  license: { type: String, required: true },
  city: { type: String, enum: CITIES, required: true },
  routes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }],
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
  rating: { type: Number, default: 5.0 },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Operator', operatorSchema);
