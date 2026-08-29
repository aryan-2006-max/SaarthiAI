import mongoose from 'mongoose';

const safetyEventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['sos', 'route_deviation', 'unsafe_area', 'incident'], required: true },
  location: { lat: Number, lng: Number },
  status: { type: String, enum: ['triggered', 'acknowledged', 'resolved', 'false_alarm'], default: 'triggered' },
  emergencyContacts: [{ name: String, phone: String, relationship: String }],
  journeyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Journey' },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('SafetyEvent', safetyEventSchema);
