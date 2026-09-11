# 🚀 SaarthiAI – Intelligent Mobility Ecosystem for India

> **Plan smarter → Predict better → Travel easier**
>
> SaarthiAI = One intelligent platform for the entire Indian commuting journey.

*Inspired by global intelligent mobility practices, SaarthiAI is designed around India's unique multimodal and last-mile transportation ecosystem.*

## 🎯 Problem Statement

Indian commuters face fragmented public transportation with no unified system that considers crowd levels, traffic conditions, weather, safety, accessibility, and personal preferences together. Existing mobility apps provide information and booking but lack an **AI intelligence layer** for personalized, predictive recommendations.

## 💡 Our Solution

SaarthiAI doesn't just answer *"What transport options are available?"* — it answers:

> **"What is the best commuting option for me right now?"**

### Key Differentiator
| Existing Apps | SaarthiAI |
|---|---|
| "Bus arrives in 5 minutes" | "Bus arrives in 5 min, but predicted 90% occupancy. Next bus in 12 min at 55% occupancy. **Wait 7 min for a better journey.**" |
| Route discovery | Predictive, personalized, crowd-aware route recommendations |
| Static information | Dynamic, AI-driven commute intelligence |

SaarthiAI proposes an **integrated AI intelligence layer** that combines prediction, personalization, recommendation, and action for India's fragmented multimodal commuting ecosystem.

## ✨ Features

### For Commuters 👤
- 🤖 AI-powered multimodal route planning with explainable recommendations
- 📊 Crowd prediction & smart boarding recommendations  
- 🚦 Traffic intelligence & disruption alerts
- 🔄 Dynamic mid-journey replanning
- 🚶 Last-mile connectivity comparison
- 💳 Saarthi Card digital mobility wallet
- 💰 AI fare optimization & spending analytics
- 🌱 Green commute tracking (CO₂ savings)
- 🛡️ Safety mode with SOS
- ♿ Accessibility mode
- 💬 AI Commute Assistant
- 📋 Community incident reporting
- 🔔 Smart notifications & daily briefings
- 📍 Saved places & regular journeys

### For Transport Operators 🚌
- 📈 Fleet management dashboard
- 📊 Vehicle occupancy & revenue analytics
- 🔔 Incident & delay monitoring
- 📉 Passenger demand insights

### For Admins/Authorities 🏛️
- 🗺️ City mobility overview with crowd & traffic heatmaps
- 📊 Demand prediction with deployment recommendations
- 👥 User & operator management
- 📋 Community report verification
- 📈 Transaction & usage analytics

## 🏗️ Architecture

```
Transport Operators
       ↓
Bus / Metro / Train / Auto / E-rickshaw
       ↓
Mobility APIs / Open Mobility Networks
       ↓
┌─────────────────────────────────┐
│        SAARTHIAI ENGINE          │
│                                 │
│  🧠 Crowd Prediction            │
│  🚦 Traffic Prediction          │
│  ⚠️  Disruption Prediction       │
│  🗺️  Route Optimization          │
│  👤 Personalization             │
│  💰 Fare Optimization           │
│  🛡️  Safety Intelligence         │
│  ♿ Accessibility Intelligence  │
└────────────────┬────────────────┘
       ↓
 SaarthiAI Application
       ↓
Commuter / Operator / Admin
```

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS (White + Sky Blue) |
| State | Zustand |
| Charts | Recharts |
| Maps | Leaflet + OpenStreetMap |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| AI Layer | Modular (mock + LLM-ready) |

## 📂 Project Structure

```
SaarthiAI/
├── backend/
│   ├── config/          # Database, env, constants
│   ├── controllers/     # 21 API controllers
│   ├── middleware/       # Auth, roles, errors, rate limiting
│   ├── models/          # 22 Mongoose schemas
│   ├── routes/          # 18 API route groups
│   ├── services/        # 11 AI/intelligence services
│   ├── seed/            # Demo data generator (7 cities)
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/  # 13 reusable UI components
│   │   ├── pages/       # 24 application screens
│   │   ├── store/       # 5 Zustand state stores
│   │   ├── services/    # 15 API service modules
│   │   └── utils/       # Constants, formatters, mock data
│   └── ...config
├── docs/                # Architecture & API documentation
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB 6+ (running on localhost:27017)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd SaarthiAI
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create environment file
cp .env.example .env
# Edit .env with your values

# Seed database with demo data
npm run seed

# Start backend server
npm start
# Server runs on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

## ⚙️ Environment Variables

### Backend (.env)
```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/saarthiai
JWT_SECRET=your-secret-key
JWT_EXPIRE=30d
AI_API_KEY=           # Optional: OpenAI/Gemini API key
MAPS_API_KEY=         # Optional: Google Maps/Mapbox key
WEATHER_API_KEY=      # Optional: OpenWeather key
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🔑 Demo Accounts

| Role | Email | Password | Access |
|---|---|---|---|
| Commuter | user@saarthi.ai | password123 | Full commuter features |
| Transport Operator | operator@saarthi.ai | password123 | Operator dashboard |
| Admin | admin@saarthi.ai | password123 | Admin dashboard + all features |

## 🎮 Demo Walkthrough

### Complete Demo Scenario (Aryan's College Commute)

1. **Login** as Aryan (user@saarthi.ai)
2. **Dashboard** shows: Rain + High Traffic + Bus Crowding detected
3. **Normal route**: E-rickshaw → Bus 42 → Metro → Walk (61 min predicted, ₹35, High Crowd)
4. **AI recommends Route B**: E-rickshaw → Bus 127 → Metro → Walk (46 min, ₹42, Medium Crowd)
5. **Start journey** → Live tracking with segment progress
6. **Metro disruption** detected mid-journey
7. **AI suggests alternative**: Bus → Bus → E-rickshaw, asks "Switch route?"
8. **Complete journey** → Fare deducted: ₹55
9. **Saarthi Card**: ₹850 → ₹795
10. **Transaction** added to history with spending analytics
11. **Green Score** updated with CO₂ savings

### Transaction Demo
- Starting balance: ₹850
- E-rickshaw: ₹15, Bus: ₹10, Metro: ₹30 = Total ₹55
- Final balance: ₹795
- Full spending analytics with charts

## 📊 API Documentation

See [docs/API.md](docs/API.md) for complete API documentation.

### Key Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | User registration |
| POST | /api/auth/login | Authentication |
| POST | /api/journeys/plan | AI route planning |
| POST | /api/predictions/crowd | Crowd prediction |
| POST | /api/ai/chat | AI assistant |
| GET | /api/wallet | Wallet balance |
| GET | /api/admin/overview | Admin analytics |

## 🧠 AI/Intelligence Modules

| Module | Description |
|---|---|
| Route Scoring Engine | Weighted scoring: time, cost, crowd, safety, accessibility, environment |
| Crowd Prediction | Time/day/weather-based occupancy prediction |
| Traffic Intelligence | Real-time status & delay prediction |
| Disruption Prediction | Weather/event/incident-based alerts |
| Fare Optimization | Spending analysis & savings recommendations |
| AI Assistant | Context-aware conversational interface |
| Smart Boarding | Vehicle comparison & wait recommendations |
| Last-Mile Intelligence | Multi-option last-mile ranking |
| Green Score | CO₂ savings estimation |

### Route Scoring Formula
```
CommuteScore = (w_time × TimeScore) + (w_cost × CostScore) + (w_crowd × CrowdScore)
             + (w_safety × SafetyScore) + (w_access × AccessScore) + (w_env × EnvScore)
```
Default weights: Time 30%, Cost 15%, Crowd 20%, Safety 20%, Accessibility 10%, Environment 5%

## 🗄️ Database Schema

22 MongoDB collections: Users, Routes, Stops, Vehicles, Journeys, SavedPlaces, CrowdData, CrowdPredictions, TrafficData, Disruptions, Reports, Transactions, Wallets, Cards, Notifications, Preferences, AccessibilityProfiles, SafetyEvents, Operators, GreenScores, Analytics, DemoSimulations.

See [docs/DATABASE.md](docs/DATABASE.md) for detailed schema documentation.

## ✅ Implemented Features (Phase 1)

| # | Feature | Status |
|---|---|---|
| 1 | User authentication (JWT) | ✅ Implemented |
| 2 | Role-based authorization | ✅ Implemented |
| 3 | User profile & preferences | ✅ Implemented |
| 4 | Home dashboard with daily briefing | ✅ Implemented |
| 5 | AI commute planner | ✅ Implemented |
| 6 | Multimodal journey planning | ✅ Implemented |
| 7 | Route scoring engine | ✅ Implemented |
| 8 | Crowd intelligence & prediction | ✅ Implemented (simulated data) |
| 9 | Smart boarding recommendation | ✅ Implemented |
| 10 | Traffic intelligence | ✅ Implemented (simulated data) |
| 11 | Disruption prediction & alerts | ✅ Implemented (simulated data) |
| 12 | Dynamic mid-journey replanning | ✅ Implemented |
| 13 | Last-mile intelligence | ✅ Implemented |
| 14 | Saarthi Card (digital wallet) | ✅ Implemented (simulated) |
| 15 | Unified transaction history | ✅ Implemented |
| 16 | AI fare optimization | ✅ Implemented |
| 17 | Green commute tracking | ✅ Implemented |
| 18 | Community reporting | ✅ Implemented |
| 19 | Safety mode & SOS | ✅ Implemented (simulated) |
| 20 | Accessibility mode | ✅ Implemented |
| 21 | AI commute assistant | ✅ Implemented |
| 22 | Notification system | ✅ Implemented |
| 23 | Admin dashboard | ✅ Implemented |
| 24 | Operator dashboard | ✅ Implemented |
| 25 | Responsive mobile-first UI | ✅ Implemented |
| 26 | Demo mode | ✅ Implemented |
| 27 | Saved places & journeys | ✅ Implemented |
| 28 | Personalized route scoring | ✅ Implemented |
| 29 | Explainable AI recommendations | ✅ Implemented |
| 30 | Analytics dashboards | ✅ Implemented |
| 31 | Real-time Live Bus Tracking on Leaflet Map | ✅ Implemented |
| 32 | AI Crowd Prediction per Bus | ✅ Implemented |
| 33 | AI Bus Deployment Optimizer (Authority) | ✅ Implemented |
| 34 | Dark Mode & App-style Dashboard | ✅ Implemented |

## 🔄 Simulated vs Real

| Component | Current (Phase 1) | Future |
|---|---|---|
| Transport data | Demo data (7 cities) | Real GTFS/API feeds |
| Crowd data | Algorithm-generated | IoT sensors, CCTV |
| Traffic data | Time-based simulation | Google/Mapbox APIs |
| Payment | Simulated wallet | NCMC, UPI integration |
| Maps | Leaflet/OSM | Google Maps/Mapbox |
| AI Chat | Rule-based mock | LLM (GPT/Gemini) |
| Weather | Simulated | OpenWeather API |
| Vehicle tracking | Simulated | GPS/GTFS-RT |

## 🔮 Future Roadmap

| Phase | Focus |
|---|---|
| Phase 2 | Real-time transport API integration |
| Phase 3 | Real crowd sensor integration |
| Phase 4 | NCMC/payment gateway integration |
| Phase 5 | Transport operator partnerships |
| Phase 6 | City-wide mobility digital twin |
| Phase 7 | Multi-city deployment |
| Phase 8 | Nationwide intelligent mobility ecosystem |

## 🇮🇳 India-First Design

Designed specifically for Indian conditions:
- High-density public transport (buses, metro, local trains)
- E-rickshaws, autos, shared mobility
- Multimodal journeys with last-mile connectivity
- ₹ pricing with Indian fare structures
- Indian cities (Delhi, Mumbai, Bengaluru, Pune, Hyderabad, Lucknow, Nashik)
- Festival/event disruption handling
- Monsoon/flooding scenarios
- Accessibility challenges in Indian infrastructure

## ⚠️ Disclaimers

- **Saarthi Card** is a simulated digital wallet. No real payment processing.
- **Transport data** is fictional demo data. Not live government data.
- **SOS/Safety** features are simulated. Real emergency services are NOT contacted.
- **AI recommendations** use rule-based logic. Connect real LLM via AI_API_KEY.
- All predictions and estimates are simulated for demonstration.

## 📄 Documentation

- [Detailed Project Report](docs/PROJECT_REPORT.md)
- [System Architecture](docs/ARCHITECTURE.md)
- [Database Schema](docs/DATABASE.md)
- [API Documentation](docs/API.md)
- [AI Architecture](docs/AI_ARCHITECTURE.md)
- [User Flows](docs/USER_FLOWS.md)
- [Demo Guide](docs/DEMO_GUIDE.md)

---

**SaarthiAI** — Your Intelligent Mobility Companion 🚀

*Plan smarter → Predict better → Travel easier*

Built with ❤️ for Indian commuters | © 2026
