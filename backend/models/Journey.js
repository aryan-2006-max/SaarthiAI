import mongoose from 'mongoose';

const journeySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  origin: { name: String, lat: Number, lng: Number },
  destination: { name: String, lat: Number, lng: Number },
  segments: [{
    mode: String,
    from: Object,
    to: Object,
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
    distance: Number,
    duration: Number,
    fare: Number,
    crowdLevel: String
  }],
  totalDistance: Number,
  totalDuration: Number,
  totalFare: Number,
  commuteScore: Number,
  scoreBreakdown: {
    time: Number,
    cost: Number,
    crowd: Number,
    safety: Number,
    accessibility: Number,
    environment: Number
  },
  status: { type: String, enum: ['planned', 'active', 'completed', 'cancelled'], default: 'planned' },
  explanation: [String],
  startTime: Date,
  endTime: Date,
  isRecommended: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Journey', journeySchema);
