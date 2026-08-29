import DemoSimulation from '../models/DemoSimulation.js';

export const demoSimulationService = {
  startSimulation: async () => {
    let sim = await DemoSimulation.findOne();
    if (!sim) sim = new DemoSimulation();
    sim.active = true;
    await sim.save();
    return sim;
  },

  stopSimulation: async () => {
    let sim = await DemoSimulation.findOne();
    if (sim) {
      sim.active = false;
      await sim.save();
    }
    return sim;
  },

  simulateVehicleMovement: async () => {
    // updates vehicle location
  },
  
  simulateCrowdChanges: async () => {
    // fluctuate crowd
  },

  simulateDisruption: async () => {
    // generate disruptions
  },

  simulateTransaction: async (userId) => {
    // create sample tx
  }
};
