import mongoose from 'mongoose';

const greenScoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  month: { type: String, required: true }, // YYYY-MM
  publicTransportTrips: { type: Number, default: 0 },
  walkingTrips: { type: Number, default: 0 },
  cyclingTrips: { type: Number, default: 0 },
  sharedRides: { type: Number, default: 0 },
  totalTrips: { type: Number, default: 0 },
  estimatedCO2Saved: { type: Number, default: 0 },
  score: { type: Number, min: 0, max: 100, default: 0 },
  breakdown: {
    publicTransport: { type: Number, default: 0 },
    walking: { type: Number, default: 0 },
    cycling: { type: Number, default: 0 },
    shared: { type: Number, default: 0 }
  }
});

export default mongoose.model('GreenScore', greenScoreSchema);
