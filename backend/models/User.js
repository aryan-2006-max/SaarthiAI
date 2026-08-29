import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { ROLES, CITIES } from '../config/constants.js';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  mobile: { type: String },
  password: { type: String, required: true },
  city: { type: String, enum: CITIES },
  role: { type: String, enum: Object.values(ROLES), default: ROLES.COMMUTER },
  preferredLanguage: { type: String, default: 'en' },
  profilePicture: { type: String },
  homeLocation: { lat: Number, lng: Number, address: String },
  workLocation: { lat: Number, lng: Number, address: String },
  travelPreferences: {
    fastest: { type: Boolean, default: false },
    cheapest: { type: Boolean, default: false },
    leastCrowded: { type: Boolean, default: false },
    safest: { type: Boolean, default: false },
    greenest: { type: Boolean, default: false },
    accessible: { type: Boolean, default: false }
  },
  preferenceWeights: {
    time: { type: Number, default: 30 },
    cost: { type: Number, default: 15 },
    crowd: { type: Number, default: 20 },
    safety: { type: Number, default: 20 },
    accessibility: { type: Number, default: 10 },
    environment: { type: Number, default: 5 }
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = function() {
  return jwt.sign({ id: this._id, role: this.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRE });
};

export default mongoose.model('User', userSchema);
