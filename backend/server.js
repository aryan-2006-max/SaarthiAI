import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { generalLimiter, authLimiter } from './middleware/rateLimiter.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import stopRoutes from './routes/stopRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import journeyRoutes from './routes/journeyRoutes.js';
import crowdRoutes from './routes/crowdRoutes.js';
import predictionRoutes from './routes/predictionRoutes.js';
import trafficRoutes from './routes/trafficRoutes.js';
import disruptionRoutes from './routes/disruptionRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import walletRoutes from './routes/walletRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import operatorRoutes from './routes/operatorRoutes.js';

dotenv.config();

// Initialize app
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use(generalLimiter);

// Routes
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/stops', stopRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/journeys', journeyRoutes);
app.use('/api/crowd', crowdRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/traffic', trafficRoutes);
app.use('/api/disruptions', disruptionRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/card', cardRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/operator', operatorRoutes);

// Error Handler
app.use(errorHandler);

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});
