import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['debit', 'credit', 'refund'], required: true },
  transport: String,
  route: String,
  from: String,
  to: String,
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['saarthi_card', 'upi', 'cash'], required: true },
  status: { type: String, enum: ['success', 'failed', 'pending'], default: 'success' },
  reference: { type: String, unique: true, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
