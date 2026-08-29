import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDB, env } from '../config/db.js'; // Adjust path logic in execution

// Models
import User from '../models/User.js';
import Wallet from '../models/Wallet.js';
import Card from '../models/Card.js';
import Preference from '../models/Preference.js';
import Route from '../models/Route.js';
import Stop from '../models/Stop.js';
import Vehicle from '../models/Vehicle.js';
import Transaction from '../models/Transaction.js';
import Disruption from '../models/Disruption.js';
import Report from '../models/Report.js';

dotenv.config();

const seedData = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/saarthiai');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    console.log('Clearing old data...');
    await Promise.all([
      User.deleteMany(), Wallet.deleteMany(), Card.deleteMany(), Preference.deleteMany(),
      Route.deleteMany(), Stop.deleteMany(), Vehicle.deleteMany(), Transaction.deleteMany(),
      Disruption.deleteMany(), Report.deleteMany()
    ]);
    
    console.log('Creating users...');
    const salt = await bcrypt.genSalt(10);
    const pwd = await bcrypt.hash('password123', salt);
    
    const commuter = await User.create({ name: 'Aryan Sharma', email: 'user@saarthi.ai', password: pwd, city: 'Delhi', role: 'commuter' });
    const operator = await User.create({ name: 'Metro Operator', email: 'operator@saarthi.ai', password: pwd, city: 'Delhi', role: 'operator' });
    const admin = await User.create({ name: 'Admin User', email: 'admin@saarthi.ai', password: pwd, city: 'Delhi', role: 'admin' });

    console.log('Creating wallets and cards...');
    for (const u of [commuter, operator, admin]) {
      const w = await Wallet.create({ user: u._id, balance: 1000 });
      await Card.create({ user: u._id, cardNumber: `123456789012345${u.role.length}`, maskedNumber: 'XXXX-XXXX-XXXX-3456', wallet: w._id, expiresAt: new Date(Date.now() + 86400000*365) });
    }

    console.log('Creating preferences...');
    await Preference.create({ user: commuter._id, weights: { time: 40, cost: 20, crowd: 20, safety: 10, accessibility: 5, environment: 5 } });

    console.log('Creating stops and routes...');
    const stop1 = await Stop.create({ stopId: 'S1', name: 'Rajiv Chowk', city: 'Delhi', location: { type: 'Point', coordinates: [77.2167, 28.6328] }, type: 'metro_station' });
    const stop2 = await Stop.create({ stopId: 'S2', name: 'Huda City Centre', city: 'Delhi', location: { type: 'Point', coordinates: [77.0726, 28.4595] }, type: 'metro_station' });
    
    const route = await Route.create({
      routeId: 'R1', name: 'Rajiv Chowk → Huda City Centre', city: 'Delhi', type: 'metro', operator: operator._id,
      stops: [{ stop: stop1._id, order: 1 }, { stop: stop2._id, order: 2 }],
      fare: { base: 10, perKm: 2 }
    });

    console.log('Creating vehicles...');
    await Vehicle.create({ vehicleId: 'V1', number: 'DL-METRO-01', type: 'metro', route: route._id, operator: operator._id, capacity: 300, currentOccupancy: 150, status: 'running' });

    console.log('Creating disruptions and reports...');
    await Disruption.create({ type: 'maintenance', city: 'Delhi', severity: 'medium', description: 'Track maintenance near Saket', startTime: new Date() });
    await Report.create({ user: commuter._id, type: 'bus_overcrowding', city: 'Delhi', description: 'Bus 507 is very crowded', severity: 'high', location: { lat: 28.6, lng: 77.2 } });

    console.log('Seeding completed successfully!');
    process.exit();
  } catch (error) {
    console.error('Error with seed data:', error);
    process.exit(1);
  }
};

seedData();
