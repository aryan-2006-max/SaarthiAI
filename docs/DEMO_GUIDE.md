# Demo Guide

## Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB running locally (default port 27017)
- Git

## Setup

```bash
# 1. Start Database (Ensure MongoDB service is running)

# 2. Setup Backend
cd backend
npm install
npm run seed  # Loads mock data, routes, and demo accounts
npm start     # Runs on http://localhost:5000

# 3. Setup Frontend
cd frontend
npm install
npm run dev   # Runs on http://localhost:5173
```

## Demo Accounts

| Role | Email | Password |
|---|---|---|
| **Commuter** | `user@saarthi.ai` | `password123` |
| **Operator** | `operator@saarthi.ai` | `password123` |
| **Admin** | `admin@saarthi.ai` | `password123` |

*Note: The frontend login screen features "Quick Login" buttons to bypass manual typing during presentations.*

## Demo Walkthrough (Step-by-step)

1. **Splash screen → Login:** Show the brand, click the Commuter demo button.
2. **Home dashboard tour:** Highlight the personalized greeting, current weather, active alerts, and quick actions.
3. **Plan a journey:** Enter "Home" to "College".
4. **View route comparison:** Show how AI Route Scoring ranks a slightly longer but significantly less crowded route higher than the theoretically fastest route.
5. **Start journey:** Click start. Trigger the "Demo Mode: Simulate Disruption" button. Show the dynamic re-routing alert.
6. **Wallet and transactions:** Navigate to Wallet. Show the auto-deducted fare and current balance.
7. **AI Assistant conversation:** Open chat, ask "Is the yellow line crowded?" and receive context-aware advice.
8. **Safety mode SOS:** Show the persistent SOS button on the journey screen.
9. **Accessibility mode:** Show profile preferences toggling wheelchair access, altering route recommendations.
10. **Community reporting:** Submit a quick report (e.g., "Heavy traffic at crossing").
11. **Green score:** Show the gamification aspect in the user profile.
12. **Admin dashboard:** Log out, log in as Admin. Show the city-wide heatmap and system health.
13. **Operator dashboard:** Log out, log in as Operator. Show fleet tracking and revenue analytics.

## Features Checklist

| Feature | Status | Notes |
|---|---|---|
| JWT Auth & RBAC | ✅ Implemented | Fully functional |
| Multimodal Routing Engine | ✅ Implemented | Custom heuristic algorithm |
| UI/UX Design System | ✅ Implemented | Tailwind + React |
| Live Map Integration | ✅ Implemented | Leaflet.js |
| AI Chat Assistant | 🔄 Simulated | Mock responses (ready for API) |
| Crowd Prediction | 🔄 Simulated | Mathematical models based on time |
| Disruption Alerts | 🔄 Simulated | Triggered manually in demo mode |
| Wallet & NCMC Card | 🔄 Simulated | Local DB state manipulation |
| Real-time Vehicle Tracking | 📋 Planned | Phase 2 GTFS integration |
| Payment Gateway | 📋 Planned | Phase 4 |

*(✅ Implemented = Real code/logic; 🔄 Simulated = Uses mock data/heuristics for demo; 📋 Planned = Future phase)*

## Simulated vs Real Features
To ensure a smooth, deterministic presentation for judging:
- **Real processing:** The routing algorithm genuinely calculates scores based on weights. The database genuinely stores user state, transactions, and preferences. The maps render real GIS coordinates.
- **Mock data:** The actual "live" locations of buses and the exact crowd percentages are simulated via scheduled seed data, as we cannot connect to live city APIs without operator partnerships.

## Future API Integrations

| Service | Purpose | Env Var Placeholder |
|---|---|---|
| **Google Maps / Mapbox** | Advanced Polyline rendering & Geocoding | `MAPS_API_KEY` |
| **OpenWeather** | Live climate data for disruption models | `WEATHER_API_KEY` |
| **OpenAI / Gemini** | Production LLM for Commute Assistant | `AI_API_KEY` |
| **GTFS Feeds** | Standardized transit schedules | `GTFS_ENDPOINT_URL` |
| **ONDC Mobility** | Interoperable booking network | `ONDC_REGISTRY_URL` |
| **NCMC Payment** | Bank integrations for seamless deducts | `PAYMENT_GATEWAY_KEY` |
