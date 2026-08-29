import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  cardNumber: { type: String, required: true, unique: true },
  maskedNumber: { type: String, required: true },
  status: { type: String, enum: ['active', 'frozen', 'expired'], default: 'active' },
  wallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
  issuedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true }
});

export default mongoose.model('Card', cardSchema);
