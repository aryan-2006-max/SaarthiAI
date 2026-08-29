import mongoose from 'mongoose';

const savedPlaceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['home', 'office', 'college', 'gym', 'station', 'airport', 'custom'], required: true },
  location: { lat: Number, lng: Number, address: String },
  icon: String
});

export default mongoose.model('SavedPlace', savedPlaceSchema);
