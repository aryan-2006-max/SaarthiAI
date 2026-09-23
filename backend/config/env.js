import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/saarthiai',
  JWT_SECRET: process.env.JWT_SECRET || 'saarthai-jwt-secret-change-in-production',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
  
  // External Live API Keys
  AI_API_KEY: process.env.AI_API_KEY || process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || '',
  MAPS_API_KEY: process.env.MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || process.env.OPENWEATHER_API_KEY || '',
  BUS_TRACKING_API_KEY: process.env.BUS_TRACKING_API_KEY || process.env.OTD_DELHI_API_KEY || process.env.TRANSIT_API_KEY || '',
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || '',
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || '',
  
  NODE_ENV: process.env.NODE_ENV || 'development'
};
