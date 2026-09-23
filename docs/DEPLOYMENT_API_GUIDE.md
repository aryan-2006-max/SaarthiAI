# 🚀 SaarthiAI Deployment & API Keys Integration Guide

This document provides step-by-step instructions for configuring live external API keys and deploying **SaarthiAI** to production cloud platforms (Render, Vercel, Railway, AWS, MongoDB Atlas).

---

## 🔑 1. API Keys & Environment Variables Matrix

| Service | Environment Variable | Usage | Where to Get API Key |
| :--- | :--- | :--- | :--- |
| **Google Gemini AI** | `AI_API_KEY` / `GEMINI_API_KEY` | Real-time AI Route Assistant, chat, and daily commute recommendations | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| **Google Maps Platform** | `MAPS_API_KEY` / `VITE_GOOGLE_MAPS_API_KEY` | Live geocoding, route maps, distance matrix, and traffic telemetry | [Google Cloud Console](https://console.cloud.google.com/google/maps-apis) |
| **OpenWeatherMap** | `WEATHER_API_KEY` / `OPENWEATHER_API_KEY` | 2-Hour prior weather disruption notice & rainfall predictions | [OpenWeatherMap Portal](https://home.openweathermap.org/api_keys) |
| **MongoDB Atlas** | `DATABASE_URL` / `MONGODB_URI` | Production cloud database for commuters, drivers, tickets & wallets | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |
| **Razorpay / Payment** | `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | Wallet top-ups & cashless DMRC / DTC authority passes | [Razorpay Dashboard](https://dashboard.razorpay.com/) |

---

## 🛠️ 2. Local Environment Configuration

### Backend (`/backend/.env`)
```ini
PORT=5000
NODE_ENV=production
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/saarthiai?retryWrites=true&w=majority
JWT_SECRET=saarthai-jwt-secret-key-prod-2026

# Google Gemini API Key
AI_API_KEY=AIzaSyYourGoogleGeminiKeyHere
GEMINI_API_KEY=AIzaSyYourGoogleGeminiKeyHere

# Google Maps API Key
MAPS_API_KEY=AIzaSyYourGoogleMapsKeyHere

# OpenWeatherMap API Key
WEATHER_API_KEY=your_openweather_key_here
```

### Frontend (`/frontend/.env`)
```ini
VITE_API_URL=https://saarthiai-backend.onrender.com/api
VITE_GOOGLE_MAPS_API_KEY=AIzaSyYourGoogleMapsKeyHere
VITE_GEMINI_API_KEY=AIzaSyYourGoogleGeminiKeyHere
```

---

## ☁️ 3. Production Deployment Guide

### Option A: Frontend on Vercel / Netlify
1. Connect your GitHub repository `aryan-2006-max/SaarthiAI`.
2. Set **Root Directory** to `frontend`.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add Environment Variables:
   - `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
   - `VITE_GEMINI_API_KEY` = *Your Key*
   - `VITE_GOOGLE_MAPS_API_KEY` = *Your Key*

### Option B: Backend on Render / Railway
1. Connect your GitHub repository `aryan-2006-max/SaarthiAI`.
2. Set **Root Directory** to `backend`.
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add Environment Variables (`DATABASE_URL`, `JWT_SECRET`, `AI_API_KEY`, `MAPS_API_KEY`, `WEATHER_API_KEY`).

---

## 🛡️ Fallback Resilience
If live API keys are omitted or invalid during initial deployment, SaarthiAI automatically switches to its high-performance **Intelligent Telemetry & Simulation Engine** so the app runs smoothly with 0 errors!
