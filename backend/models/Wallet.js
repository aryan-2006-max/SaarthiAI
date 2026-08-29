import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  balance: { type: Number, default: 850 },
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['active', 'frozen'], default: 'active' },
  lastTransaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Wallet', walletSchema);
