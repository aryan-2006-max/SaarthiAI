import mongoose from 'mongoose';

const accessibilityProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  needs: [{ type: String, enum: ['wheelchair', 'elderly', 'pregnant', 'child_stroller', 'visual_assistance'] }],
  priorities: [String],
  preferElevator: { type: Boolean, default: false },
  preferRamp: { type: Boolean, default: false },
  maxStairs: { type: Number, default: 0 },
  maxWalkDistance: { type: Number, default: 500 },
  needsSeating: { type: Boolean, default: false }
});

export default mongoose.model('AccessibilityProfile', accessibilityProfileSchema);
