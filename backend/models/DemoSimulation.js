import mongoose from 'mongoose';

const demoSimulationSchema = new mongoose.Schema({
  active: { type: Boolean, default: false },
  scenario: { type: String, default: 'default' },
  lastUpdate: { type: Date, default: Date.now },
  data: { type: Object, default: {} }
});

export default mongoose.model('DemoSimulation', demoSimulationSchema);
