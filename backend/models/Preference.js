import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  weights: {
    time: { type: Number, default: 30 },
    cost: { type: Number, default: 15 },
    crowd: { type: Number, default: 20 },
    safety: { type: Number, default: 20 },
    accessibility: { type: Number, default: 10 },
    environment: { type: Number, default: 5 }
  },
  preferredModes: [String],
  avoidModes: [String],
  maxWalkDistance: { type: Number, default: 1000 },
  maxBudget: Number,
  accessibilityNeeds: [String]
});

export default mongoose.model('Preference', preferenceSchema);
