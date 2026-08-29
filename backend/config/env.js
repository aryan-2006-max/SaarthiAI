import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/saarthiai',
  JWT_SECRET: process.env.JWT_SECRET || 'saarthai-jwt-secret-change-in-production',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
  AI_API_KEY: process.env.AI_API_KEY || '',
  MAPS_API_KEY: process.env.MAPS_API_KEY || '',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || '',
  NODE_ENV: process.env.NODE_ENV || 'development'
};
